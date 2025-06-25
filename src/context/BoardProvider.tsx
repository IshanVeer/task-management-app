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
  createBoard: (boardName: string, columns: string[]) => void;
}

// create board context
const BoardContext = createContext<BoardContextType | undefined>(undefined);

const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  // useState to move data to state
  const [boardData, setBoardData] = useState<BoardDataProps>({ boards: [] });
  const [activeBoard, setActiveBoard] = useState("1");
  const [selectedTask, setSelectedTask] = useState<TaskProps | undefined>();

  // on initial load pass the initialBoardData to local storage and get it.

  useEffect(() => {
    const storedData = localStorage.getItem("boards");
    if (storedData) {
      setBoardData(JSON.parse(storedData));
    } else {
      localStorage.setItem("boards", JSON.stringify(initialBoardData));

      setBoardData(initialBoardData);
    }
  }, []);

  const selectedBoard = boardData.boards.find(
    (board) => board.id === activeBoard
  );

  // create new board
  const createBoard = (boardName: string, columns: string[]) => {
    // create a new board object which holds all data
    const newBoard = {
      id: Date.now().toString(),
      name: boardName,
      columns: columns.map((column) => ({ name: column, tasks: [] })),
    };
    // updated board, which pulls previous board and adds new board
    const updatedBoard = [...boardData.boards, newBoard];
    const updatedBoardData = { boards: updatedBoard };

    // save it to localstorage
    localStorage.setItem("boards", JSON.stringify(updatedBoardData));

    // update board data state
    setBoardData(updatedBoardData);
  };

  // create new task

  const value = {
    boardData,
    setBoardData,
    activeBoard,
    setActiveBoard,
    selectedBoard,
    selectedTask,
    setSelectedTask,
    createBoard,
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
