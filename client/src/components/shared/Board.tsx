import React from "react";
import { data } from "@/constants";
import NoColumnPage from "./NoColumnPage";

interface Boardprops {
  selectedBoard: string;
}

const Board = ({ selectedBoard }: Boardprops) => {
  const selectedBoardData = data.boards.find(
    (board) => board.name === selectedBoard
  );
  console.log(selectedBoardData, " selected board data");
  return (
    <div>
      {selectedBoardData?.columns?.length ? (
        selectedBoardData?.columns.map((column) => column.name)
      ) : (
        <NoColumnPage />
      )}
    </div>
  );
};

export default Board;
