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
    <div className="flex items-center p-4 gap-4">
      {selectedBoardData?.columns?.length ? (
        selectedBoardData?.columns.map((column) => (
          <Column taskQty={column.tasks.length} name={column.name} />
        ))
      ) : (
        <NoColumnPage />
      )}
    </div>
  );
};

export default Board;
