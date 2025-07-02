import React, { createContext, useContext, useEffect, useState } from "react";
import { initialBoardData } from "@/constants";
import type { BoardDataProps, BoardProps, TaskProps } from "@/types";
import type { DragEndEvent } from "@dnd-kit/core";

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
  editTask: (
    taskId: string,
    newTaskTitle: string,
    newSubtasks: string[],
    newTaskDescription: string,
    newStatus: string
  ) => void;
  deleteTask: (taskId: string) => void;
  handleDraggableEnd: (event: DragEndEvent) => void;
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

  // Edit Task
  const editTask = (
    taskId: string,
    newTaskTitle: string,
    newSubtasks: string[],
    newTaskDescription: string,
    newStatus: string
  ) => {
    let taskToMove: TaskProps | null = null;
    // get the board from board id
    const updatedBoards = boardData.boards.map((board) => {
      if (board.id !== activeBoard) {
        return board;
      }
      // get the column
      const updatedColumns = board.columns.map((column) => {
        // find task that needs to be updated
        // to find task to edit we first need to find the task index
        const taskIndex = column.tasks.findIndex((task) => task.id === taskId);

        // if task index doesn't exist that measn task doesn't exist
        if (taskIndex === -1) {
          return column;
        }
        // check the task index from the columns to get the task to edit

        const taskToEdit = column.tasks[taskIndex];

        // create task object
        const updatedTask = {
          ...taskToEdit,
          title: newTaskTitle,
          description: newTaskDescription,
          subtasks: newSubtasks.map((subtask) => ({
            title: subtask,
            isCompleted: false,
          })),
          status: newStatus,
        };

        // We have 2 scenarios now : 1. edited task is in same column as before 2. the column of task changes

        // edited task is in same column as before then only the name for title / description / subtasks change
        if (column.name === newStatus) {
          const updatedTasks = [...column.tasks];
          updatedTasks[taskIndex] = updatedTask;
          return {
            ...column,
            tasks: updatedTasks,
          };
        } else {
          taskToMove = updatedTask;
          // we just remove the task from the column if it doesn't match the new status
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== taskId),
          };
        }
      });

      if (taskToMove) {
        const columnIndex = updatedColumns.findIndex(
          (column) => column.name === newStatus
        );

        if (columnIndex !== -1) {
          updatedColumns[columnIndex] = {
            ...updatedColumns[columnIndex],
            tasks: [...updatedColumns[columnIndex].tasks, taskToMove],
          };
        }
      }
      if (taskToMove) {
        setSelectedTask(taskToMove);
      } else {
        // fallback for same-column updates
        const newSelected = updatedColumns
          .flatMap((col) => col.tasks)
          .find((t) => t.id === taskId);
        if (newSelected) {
          setSelectedTask(newSelected);
        }
      }

      return { ...board, columns: updatedColumns };
    });

    const updatedBoardData = { boards: updatedBoards };
    localStorage.setItem("boards", JSON.stringify(updatedBoardData));
    setBoardData(updatedBoardData);
  };

  // delete task
  const deleteTask = (taskId: string) => {
    const updatedBoard = boardData.boards.map((board) => {
      const updatedColumns = board.columns.map((column) => {
        const filteredTask = column.tasks.filter((task) => task.id !== taskId);
        return {
          ...column,
          tasks: filteredTask,
        };
      });
      return { ...board, columns: updatedColumns };
    });

    const updatedBoardData = { boards: updatedBoard };
    localStorage.setItem("boards", JSON.stringify(updatedBoardData));
    setBoardData(updatedBoardData);
  };

  // handle task draggable end

  const handleDraggableEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (!over?.id || over.id === active.id) {
      return;
    }

    const activeTaskId = active.id;
    const targetColumnId = over.id;

    const updatedBoards = boardData.boards.map((board) => {
      let movedTask: TaskProps | null = null;
      const updatedColumns = board.columns.map((column) => {
        // get task index

        const taskIndex = column.tasks.findIndex(
          (task) => task.id === activeTaskId
        );

        // if task doesn't exist in the column we stop the function

        if (taskIndex === -1) {
          return column;
        }
        // remove the task from the column before moving it to different column

        const newTasks = [...column.tasks];
        [movedTask] = newTasks.splice(taskIndex, 1);
        return {
          ...column,
          tasks: newTasks,
        };
      });
      if (movedTask) {
        // we find the target column where the task needs to be moved
        const columnIndex = updatedColumns.findIndex(
          (column) => column.name === targetColumnId
        );

        if (columnIndex !== -1) {
          updatedColumns[columnIndex] = {
            ...updatedColumns[columnIndex],
            tasks: [...updatedColumns[columnIndex].tasks, movedTask],
          };
        }
      }
      return {
        ...board,
        columns: updatedColumns,
      };
    });
    const updatedBoardData = { boards: updatedBoards };
    setBoardData(updatedBoardData);
    localStorage.setItem("boards", JSON.stringify(updatedBoardData));

    const updatedTask = updatedBoards
      .flatMap((board) => board.columns.flatMap((col) => col.tasks))
      .find((task) => task.id === activeTaskId);

    if (updatedTask) {
      setSelectedTask(updatedTask);
    }
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
    editTask,
    deleteTask,
    handleDraggableEnd,
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
