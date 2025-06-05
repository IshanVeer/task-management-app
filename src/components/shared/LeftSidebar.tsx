"use client";
import { useTheme } from "@/context/ThemeProvider";

import { Switch } from "@/components/ui/switch";
import { useBoardData } from "@/context/BoardProvider";

const LeftSidebar = () => {
  const { mode, themeToggleHandler } = useTheme();
  const { boardData } = useBoardData();
  return (
    <div className="pl-[33px] background-light900_dark300">
      <div className="h-[100vh]  flex flex-col justify-between pr-[33px] pb-8  border-r w-[300px]">
        <ul>
          {boardData.boards.map((board) => (
            <li key={board.name} className="">
              {board.name}
            </li>
          ))}
        </ul>
        <div>
          <div className="flex justify-center gap-6 py-4 rounded-sm background-light800_darkCustom w-full">
            <img
              src="../../../public/icons/icon-light-theme.svg"
              alt="light"
              className="object-contain"
            />

            <Switch
              checked={mode === "dark"}
              onCheckedChange={themeToggleHandler}
            />

            <img
              src="../../../public/icons/icon-dark-theme.svg"
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
