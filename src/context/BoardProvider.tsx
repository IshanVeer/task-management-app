import React, { createContext, useContext, useState } from "react";
import { initialBoardData } from "@/constants";
import type { BoardDataProps } from "@/types";

interface BoardContextType {
  boardData: BoardDataProps;
  setBoardData: React.Dispatch<React.SetStateAction<BoardDataProps>>;
  activeBoard: number;
  setActiveBoard: React.Dispatch<React.SetStateAction<number>>;
}

// create board context
const BoardContext = createContext<BoardContextType | undefined>(undefined);

const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  // useState to move data to state
  const [boardData, setBoardData] = useState(initialBoardData);
  const [activeBoard, setActiveBoard] = useState(0);

  const value = {
    boardData,
    setBoardData,
    activeBoard,
    setActiveBoard,
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
