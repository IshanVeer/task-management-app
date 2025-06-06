"use client";
import { useTheme } from "@/context/ThemeProvider";

import { Switch } from "@/components/ui/switch";
import { useBoardData } from "@/context/BoardProvider";

const LeftSidebar = () => {
  const { mode, themeToggleHandler } = useTheme();
  const { boardData, activeBoard, setActiveBoard } = useBoardData();

  const selectedBoard = boardData.boards[activeBoard];

  console.log(selectedBoard, "selected board");

  console.log(activeBoard, "active board");

  return (
    <div className="pl-[33px] background-light900_dark300">
      <div className="h-[100vh]  flex flex-col justify-between pr-[33px] pb-8  border-r w-[300px]">
        <div className="py-4">
          <p className="uppercase h5-bold pb-4 text-light-600">
            All boards ({boardData.boards.length})
          </p>
          <ul>
            {boardData.boards.map((board, index) => (
              <li
                key={board.name}
                onClick={() => setActiveBoard(index)}
                className={`flex text-light-600 items-center gap-4 base-bold p-4 pl-8  -ml-[33px] rounded-r-3xl transition duration-150 cursor-pointer ${
                  activeBoard === index
                    ? "bg-primary-500 text-white"
                    : "hover:bg-primary-500/10 dark:hover:bg-white hover:text-primary-500"
                }`}
              >
                <img
                  className={`${
                    activeBoard === index ? "brightness-0 invert" : ""
                  }`}
                  src="/icons/icon-board.svg"
                  alt="board"
                />
                {board.name}
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-4 cursor-pointer base-bold text-primary-500 py-4">
            <img src="/icons/icon-add-board.svg" /> <p>+ Create New Board</p>
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
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
