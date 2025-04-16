import React from "react";

import NoColumnPage from "./NoColumnPage";
import Column from "./Column";

interface Subtasksprops {
  title: string;
  isCompleted: boolean;
}
interface Taskprops {
  title: string;
  description: string;
  status: string;
  subtasks: Subtasksprops[];
}

interface ColumnProps {
  name: string;
  tasks: Taskprops[];
}

interface BoardColumnProps {
  name: string;
  columns: ColumnProps[];
}
interface Boardprops {
  selectedBoard: string;
  boards: BoardColumnProps[];
}

const Board = ({ selectedBoard, boards }: Boardprops) => {
  const selectedBoardData = boards.find(
    (board) => board.name === selectedBoard
  );

  if (!selectedBoardData || selectedBoardData?.columns?.length === 0) {
    return (
      <div>
        <NoColumnPage />
      </div>
    );
  }

  return (
    <div className="flex p-6 gap-6">
      {selectedBoardData?.columns.map((column) => (
        <Column
          tasks={column.tasks}
          taskQty={column.tasks.length}
          name={column.name}
        />
      ))}
      {selectedBoardData?.columns?.length && (
        <div
          className="light-gradient mt-7 mb-2 flex flex-col items-center h-screen justify-center w-[280px] flex-shrink-0 rounded-sm dark:bg-linear-0 dark:bg-[#353646]
"
        >
          <button className="h1-bold hover:text-primary-500   transition duration-150 cursor-pointer text-light-600">
            {" "}
            + New Column
          </button>
        </div>
      )}
    </div>
  );
};

export default Board;
