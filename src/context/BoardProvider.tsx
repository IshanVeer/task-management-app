import React, { createContext, useContext, useEffect, useState } from "react";
import { initialBoardData } from "@/constants";
import type { BoardDataProps, BoardProps, TaskProps } from "@/types";

interface BoardContextType {
  boardData: BoardDataProps;
  setBoardData: React.Dispatch<React.SetStateAction<BoardDataProps>>;
  activeBoard: string;
  setActiveBoard: React.Dispatch<React.SetStateAction<string>>;
  selectedBoard: BoardProps | undefined;
  selectedTask: TaskProps | undefined;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskProps | undefined>>;
}

// create board context
const BoardContext = createContext<BoardContextType | undefined>(undefined);

const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  // useState to move data to state
  const [boardData, setBoardData] = useState<BoardDataProps>({ boards: [] });
  const [activeBoard, setActiveBoard] = useState("1");
  const [selectedTask, setSelectedTask] = useState<TaskProps | undefined>();

  // on initial load pass the initialBoardData to local storage.

  useEffect(() => {
    const storedData = localStorage.getItem("boards");
    if (storedData) {
      setBoardData(JSON.parse(storedData));
    } else {
      localStorage.setItem("boards", JSON.stringify(initialBoardData));
      setBoardData(initialBoardData);
      console.log("board data stored");
    }
  }, []);

  console.log(boardData, "board data");

  const selectedBoard = boardData.boards.find(
    (board) => board.id === activeBoard
  );

  // get the data from local storage

  // create new board

  // create new task

  const value = {
    boardData,
    setBoardData,
    activeBoard,
    setActiveBoard,
    selectedBoard,
    selectedTask,
    setSelectedTask,
  };
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardProvider;

// costum hook to get data elsewhere
export const useBoardData = () => {
  const context = useContext(BoardContext);

  if (context === undefined) {
    throw new Error("useBoardData must be used inside BoardProvider");
  }

  return context;
};
