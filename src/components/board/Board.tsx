import { useBoardData } from "@/context/BoardProvider";
import React from "react";
import Column from "./Column";

interface Props {
  showSidebar: boolean;
  showSideBarHandler: () => void;
}

const Board = ({ showSidebar, showSideBarHandler }: Props) => {
  const { selectedBoard } = useBoardData();

  return (
    <div className="h-[100vh] p-4 relative">
      <div className="flex items-center justify-between">
        {selectedBoard?.columns.map((column) => (
          <Column key={column.name} column={column} />
        ))}
      </div>
      {!showSidebar && (
        <button
          onClick={() => showSideBarHandler()}
          className="bg-primary-500 -ml-4 cursor-pointer p-6 absolute bottom-12 rounded-r-4xl"
        >
          <img
            className="w-6"
            src="/public/icons/icon-show-sidebar.svg"
            alt="show-sidebar"
          />
        </button>
      )}
    </div>
  );
};

export default Board;
