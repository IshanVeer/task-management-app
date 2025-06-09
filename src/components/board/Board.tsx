import { useBoardData } from "@/context/BoardProvider";
import React from "react";
import Column from "./Column";
import Button from "../ui/Button";

interface Props {
  showSidebar: boolean;
  showSideBarHandler: () => void;
}

const Board = ({ showSidebar, showSideBarHandler }: Props) => {
  const { selectedBoard } = useBoardData();

  return (
    <div className="min-h-screen p-5 relative">
      {selectedBoard?.columns && selectedBoard?.columns?.length > 0 ? (
        <div className="flex items-start gap-5 justify-between">
          {selectedBoard?.columns.map((column) => (
            <Column key={column.name} column={column} />
          ))}
        </div>
      ) : (
        <div className="text-center my-[20%]">
          <p className="text-light-600 h2-bold pb-4">
            This board is empty. Create a new column to get started.
          </p>
          <Button label="+ Add New Column" />{" "}
        </div>
      )}
      {!showSidebar && (
        <button
          onClick={() => showSideBarHandler()}
          className="bg-primary-500 -ml-5 cursor-pointer p-6 absolute bottom-12 rounded-r-4xl"
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
