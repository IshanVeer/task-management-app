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
  deleteBoard: (boardId: string) => void;
  editBoard: (boardId: string, newName: string, newColumns: string[]) => void;
  createTask: (
    taskTitle: string,
    subtasks: string[],
    taskDescription: string,
    status: string
  ) => void;
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

  // delete board
  const deleteBoard = (boardId: string) => {
    const updatedBoard = boardData.boards.filter(
      (board) => board.id !== boardId
    );
    const updatedBoardData = { boards: updatedBoard };

    localStorage.setItem("boards", JSON.stringify(updatedBoardData));

    setBoardData(updatedBoardData);

    if (updatedBoardData.boards.length > 0) {
      setActiveBoard(updatedBoardData.boards[0].id);
    }
  };
  // edit board
  const editBoard = (
    boardId: string,
    newName: string,
    newColumns: string[]
  ) => {
    const updatedBoard = boardData.boards.map((board) => {
      if (board.id === boardId) {
        return {
          ...board,
          name: newName,
          columns: newColumns.map((column) => ({
            name: column,
            tasks: [],
          })),
        };
      }
      return board;
    });
    const updatedBoardData = { boards: updatedBoard };
    localStorage.setItem("boards", JSON.stringify(updatedBoardData));
    setBoardData(updatedBoardData);
  };

  // create new task

  const createTask = (
    taskTitle: string,
    subtasks: string[],
    taskDescription: string,
    status: string
  ) => {
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      subtasks: subtasks.map((subtask) => ({
        title: subtask,
        isCompleted: false,
      })),
      status: status,
    };

    const updatedBoard = boardData.boards.map((board) => {
      // check board is equal to active board and update the board

      if (board.id === activeBoard) {
        const updatedColumns = board.columns.map((column) => {
          if (column.name === status) {
            return {
              ...column,
              tasks: [...column.tasks, newTask],
            };
          }
          return column;
        });
        return {
          ...board,
          columns: updatedColumns,
        };
      }

      return board;
    });

    const updatedBoardData = { boards: updatedBoard };
    localStorage.setItem("boards", JSON.stringify(updatedBoardData));
    setBoardData(updatedBoardData);
  };

  const value = {
    boardData,
    setBoardData,
    activeBoard,
    setActiveBoard,
    selectedBoard,
    selectedTask,
    setSelectedTask,
    createBoard,
    deleteBoard,
    editBoard,
    createTask,
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
