import { useBoardData } from "@/context/BoardProvider";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeProvider";
import type { ModalType } from "@/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface mobileNavProps {
  openModalHandler: (modalType: ModalType) => void;
}

const MobileNavbar = ({ openModalHandler }: mobileNavProps) => {
  const { mode, themeToggleHandler } = useTheme();

  const { activeBoard, selectedBoard, boardData, setActiveBoard } =
    useBoardData();
  return (
    <div className="flex relative sm:hidden justify-between background-light900_dark300 items-center px-4 h-16  w-full">
      {/* logo container */}
      <div className="flex">
        <img
          className="object-contain"
          src="/icons/logo-mobile.svg"
          alt="logo-mobile"
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="h2-bold pl-4 flex items-center gap-2 outline-none focus:bg-transparent">
            {selectedBoard?.name}
            <img src="/icons/icon-chevron-down.svg" alt="menu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-6 -left-20  absolute top-6 background-light900_dark300">
            <p className="uppercase h5-bold  py-4 text-light-600">
              All boards ({boardData.boards.length})
            </p>
            <ul className="w-[264px] ">
              {boardData.boards.map((board) => (
                <DropdownMenuItem
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
                </DropdownMenuItem>
              ))}
            </ul>
            <button
              onClick={() => {
                openModalHandler("add-board");
              }}
              className="flex  items-center gap-4 cursor-pointer base-bold text-primary-500 py-4"
            >
              <img src="/icons/icon-add-board.svg" alt="add-board-icon" />{" "}
              <p>+ Create New Board</p>
            </button>
            <div className="flex justify-center gap-6 items-center py-4 mb-4  rounded-sm background-light800_darkCustom w-full">
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* button container */}
      <div className="flex items-center gap-4 ">
        <button
          onClick={() => openModalHandler("add-task")}
          disabled={!selectedBoard?.columns.length}
          className={`${
            !selectedBoard?.columns.length ? " opacity-50" : "cursor-pointer"
          } rounded-3xl outline-0 px-6 py-3 button-primary`}
        >
          <img src="/icons/icon-add-task-mobile.svg" alt="add-task-mobile" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <img src="/icons/icon-vertical-ellipsis.svg" alt="board-menu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="paragraph-medium absolute w-[192px] px-2 py-3 top-0 right-0">
            <DropdownMenuItem
              onClick={() => openModalHandler("edit-board")}
              className="text-light-600 py-2 cursor-pointer"
            >
              Edit Board
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => openModalHandler("delete-board")}
              className="text-red-500 py-2 cursor-pointer"
            >
              Delete Board
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MobileNavbar;
