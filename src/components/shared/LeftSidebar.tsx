"use client";
import { useTheme } from "@/context/ThemeProvider";

import { Switch } from "@/components/ui/switch";
import { useBoardData } from "@/context/BoardProvider";
import type { ModalType } from "@/types";

interface LeftSidebarProps {
  showSidebar: boolean;
  hideSidebarHandler: () => void;
  openModalHandler: (modalType: ModalType) => void;
}

const LeftSidebar = ({
  hideSidebarHandler,
  showSidebar,
  openModalHandler,
}: LeftSidebarProps) => {
  const { mode, themeToggleHandler } = useTheme();

  const { boardData, activeBoard, setActiveBoard } = useBoardData();

  return (
    <>
      {showSidebar && (
        <div className="pl-[33px] max-sm:hidden background-light900_dark300">
          <div className="h-full flex flex-col justify-between pr-[33px] pb-8  border-r w-[260px] md:w-[300px]">
            <div className="py-4">
              <p className="uppercase h5-bold pb-4 text-light-600">
                All boards ({boardData.boards.length})
              </p>
              <ul>
                {boardData.boards.map((board) => (
                  <li
                    key={board.name}
                    onClick={() => setActiveBoard(board.id)}
                    className={`flex text-light-600 items-center gap-4 base-bold p-4 pl-8  -ml-[33px] rounded-r-3xl transition duration-150 cursor-pointer ${
                      activeBoard === board.id
                        ? "bg-primary-500 text-white"
                        : "hover:bg-primary-500/10 dark:hover:bg-white hover:text-primary-500"
                    }`}
                  >
                    <img
                      className={`${
                        activeBoard === board.id ? "brightness-0 invert" : ""
                      }`}
                      src="/icons/icon-board.svg"
                      alt="board"
                    />
                    {board.name}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModalHandler("add-board")}
                className="flex items-center gap-4 cursor-pointer base-bold text-primary-500 py-4"
              >
                <img src="/icons/icon-add-board.svg" alt="add-board-icon" />{" "}
                <p>+ Create New Board</p>
              </button>
            </div>
            <div>
              <div className="flex justify-center gap-6 items-center py-4 rounded-sm background-light800_darkCustom w-full">
                <img
                  src="/icons/icon-light-theme.svg"
                  alt="light"
                  className="object-contain"
                />

                <Switch
                  checked={mode === "dark"}
                  onCheckedChange={themeToggleHandler}
                />

                <img
                  src="/icons/icon-dark-theme.svg"
                  alt="dark"
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => hideSidebarHandler()}
                className="flex w-full items-center gap-4 py-4 cursor-pointer  base-bold text-light-600"
              >
                <img
                  src="/icons/icon-hide-sidebar.svg"
                  alt="hide-sidebar-icon"
                />
                <p>Hide Sidebar</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
