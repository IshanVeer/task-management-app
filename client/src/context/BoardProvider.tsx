import { database } from "@/firebase";
import { BoardProps } from "@/types";
import { onValue, ref } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";

interface BoardContextProps {
  boards: BoardProps[];
  selectedBoard: string;
  setSelectedBoard: (board: string) => void;
  loading: boolean;
}

// setup board context

const BoardContext = createContext<BoardContextProps | undefined>(undefined);

// created board provider function

const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [boards, setBoards] = useState<BoardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState("Platform Launch");

  // fetch board data
  useEffect(() => {
    const boardsRef = ref(database, "boards");

    const unsubscribe = onValue(
      boardsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const boardData = snapshot.val();
          const boardArray = Object.keys(boardData).map((key) => ({
            id: key,
            ...boardData[key],
          }));
          setBoards(boardArray);

          // Set selectedBoard only if it's not already set
          setSelectedBoard((prevSelected) => {
            const isValid =
              boardArray.find((b) => b.name === prevSelected) !== undefined;
            return isValid
              ? prevSelected
              : boardArray.length > 0
              ? boardArray[0].name
              : "";
          });
        } else {
          setBoards([]);
        }
        setLoading(false);
      },
      (error) => {
        console.log("Error fetching boards", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <BoardContext.Provider
      value={{ boards, selectedBoard, setSelectedBoard, loading }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;

// setup custom hook that helps you access the data anywhere

export const useBoardContext = () => {
  const context = useContext(BoardContext);

  if (context === undefined) {
    throw new Error("useBoard context should be used inside BoadProvider");
  }
  return context;
};
