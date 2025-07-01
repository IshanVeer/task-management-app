import { useBoardData } from "@/context/BoardProvider";
import React from "react";
import Column from "./Column";
import Button from "../ui/Button";
import { DndContext } from "@dnd-kit/core";
import type { ModalType, TaskProps } from "@/types";

interface Props {
  showSidebar: boolean;
  showSideBarHandler: () => void;
  openModalHandler: (modalType: ModalType, task?: TaskProps) => void;
}

const Board = ({
  showSidebar,
  showSideBarHandler,
  openModalHandler,
}: Props) => {
  const { selectedBoard } = useBoardData();

  return (
    <DndContext>
      <div className="min-h-screen p-5 relative">
        {selectedBoard?.columns && selectedBoard?.columns?.length > 0 ? (
          <div className="flex items-start gap-5 w-max">
            {selectedBoard?.columns.map((column) => (
              <Column
                openModalHandler={openModalHandler}
                key={column.name}
                column={column}
              />
            ))}
            <div className="min-w-[280px] rounded-md text-center min-h-screen mt-10 custom-background-light700_dark200">
              <div className="mt-80">
                <button
                  onClick={() => openModalHandler("edit-board")}
                  className="cursor-pointer h1-bold text-light-600"
                >
                  + New Column
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center my-[20%]">
            <p className="text-light-600 h2-bold pb-4">
              This board is empty. Create a new column to get started.
            </p>
            <Button
              openModalHandler={() => openModalHandler("edit-board")}
              action="open-modal"
              label="+ Add New Column"
            />{" "}
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
    </DndContext>
  );
};

export default Board;
