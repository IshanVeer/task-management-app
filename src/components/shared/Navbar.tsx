import { useTheme } from "@/context/ThemeProvider";
import Button from "../ui/Button";
import { useBoardData } from "@/context/BoardProvider";
import type { ModalType } from "@/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  openModalHandler: (modalType: ModalType) => void;
}

const Navbar = ({ openModalHandler }: NavbarProps) => {
  const { mode } = useTheme();
  const { selectedBoard } = useBoardData();

  return (
    <div className="flex max-sm:hidden background-light900_dark300 relative items-center px-8 h-24  w-full">
      {/* logo container */}
      <div className="md:w-[300px] w-[260px] ">
        {mode === "dark" ? (
          <img src="/icons/logo-light.svg" alt="logo" />
        ) : (
          <img src="/icons/logo-dark.svg" alt="logo" />
        )}
      </div>
      {/* Board heading container */}
      <div className="flex flex-1 border-l h-full items-center justify-between">
        <h1 className="md:text-2xl font-bold text-[20px] px-6">
          {selectedBoard?.name}
        </h1>
        <div className="flex items-center gap-4 ">
          <Button
            action="open-modal"
            openModalHandler={() => openModalHandler("add-task")}
            label="+ Add New Task"
          />

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
    </div>
  );
};

export default Navbar;
