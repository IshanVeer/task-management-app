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
    //create reference to your boards location in your firebase
    const boardsRef = ref(database, "boards");
    // listen to real time data
    const unsubscribe = onValue(
      boardsRef,
      (snapshot) => {
        if (snapshot.exists()) {
          // we get board data as raw value from snapshot
          const boardData = snapshot.val();
          // turn that raw value in array
          const boardArray = Object.keys(boardData).map((key) => ({
            id: key,
            ...boardData[key],
          }));
          setBoards(boardArray);

          // if no board is selected choose the 1st board

          if (!selectedBoard && boardArray.length > 0) {
            setSelectedBoard(boardArray[0] || boardArray[0].id);
          }
        } else {
          setBoards([]);
        }
        setLoading(false);
      },
      (error) => {
        console.log("Error fetching boads", error);
      }
    );

    return () => unsubscribe();
  }, [selectedBoard]);

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
