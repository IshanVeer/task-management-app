import React from "react";
import { data } from "@/constants";
import NoColumnPage from "./NoColumnPage";
import Column from "./Column";

interface Boardprops {
  selectedBoard: string;
}

const Board = ({ selectedBoard }: Boardprops) => {
  const selectedBoardData = data.boards.find(
    (board) => board.name === selectedBoard
  );
  console.log(selectedBoardData, " selected board data");
  return (
    <div className="flex p-6 gap-6">
      {selectedBoardData?.columns?.length ? (
        selectedBoardData?.columns.map((column) => (
          <Column
            tasks={column.tasks}
            taskQty={column.tasks.length}
            name={column.name}
          />
        ))
      ) : (
        <NoColumnPage />
      )}
      <div
        className="light-gradient mt-7 mb-2 flex flex-col items-center justify-center w-[280px] flex-shrink-0 rounded-sm dark:bg-linear-0 dark:bg-[#353646]
"
      >
        <button className="h1-bold hover:text-dark-400  dark:hover:text-light-700 transition duration-150 cursor-pointer text-light-600">
          {" "}
          + New Column
        </button>
      </div>
    </div>
  );
};

export default Board;
