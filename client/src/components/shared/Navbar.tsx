import Button from "../ui/Button";
import { useTheme } from "@/context/ThemeProvider";
import { data } from "@/constants";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Theme from "./Theme";
import { ModalTypes } from "@/types";
import { useBoardContext } from "@/context/BoardProvider";

interface Navbarprops {
  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
}

const Navbar = ({ setModalType }: Navbarprops) => {
  const { mode } = useTheme();
  const { selectedBoard, setSelectedBoard } = useBoardContext();
  const selectedBoardData = data.boards.find(
    (board) => board.name === selectedBoard
  );
  return (
    <div className="flex sticky top-0 left-0 background-light900_dark400 justify-between items-center">
      {/* container left */}
      <div className="pl-8   sm:hidden">
        <img src="/icons/logo-mobile.svg" alt="logo-mobile" />
      </div>
      <div className="max-sm:hidden w-[300px] pl-8">
        {mode === "light" ? (
          <img src="/icons/logo-dark.svg" alt="logo-dark" />
        ) : (
          <img src="/icons/logo-light.svg" alt="logo-light" />
        )}
      </div>
      {/* container right */}
      <div className="border-l border-b px-8 py-6 flex-1 max-sm:border-l-0   items-center flex  justify-between border-light">
        {/* desktop */}
        <h1 className="h1-bold max-sm:hidden">{selectedBoard}</h1>
        {/* mobile */}

        <Menubar className="sm:hidden ring-0 focus:ring-0 focus:outline-none background-light900_dark400 focus:border-none border-0 shadow-none focus:bg-light-900 outline-0">
          <MenubarMenu>
            <MenubarTrigger className="h2-bold border-0 bg-transparent outline-0  flex items-center gap-2">
              {selectedBoard} <img src="/icons/icon-chevron-down.svg" alt="" />
            </MenubarTrigger>
            <MenubarContent className="relative sm:hidden  p-6  base-bold text-light-600 top-8 w-[264px]">
              <p className="mb-4">ALL BOARDS (3)</p>
              {data.boards.map((board) => (
                <MenubarItem
                  className={`${
                    selectedBoard === board.name
                      ? "bg-primary-500 text-light-900 rounded-r-3xl"
                      : "hover:rounded-r-3xl hover:bg-button-800 hover:text-primary-500"
                  } flex py-4 items-center rounded-r-3xl gap-4 cursor-pointer ease-in-out l transition duration-150 -ml-8 px-8  `}
                  key={board.name}
                  onClick={() => setSelectedBoard(board.name)}
                >
                  {selectedBoard === board.name ? (
                    <img
                      className=""
                      src="/icons/icon-board-active.svg"
                      alt="board"
                    />
                  ) : (
                    <img className="" src="/icons/icon-board.svg" alt="board" />
                  )}

                  {board.name}
                </MenubarItem>
              ))}

              <button className="flex mt-4 mb-8 gap-4 cursor-pointer text-primary-500 items-center">
                <img src="/icons/icon-board-button.svg" alt="icon button" />
                <p>+ Create New Board</p>
              </button>
              <Theme />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="flex items-center gap-4">
          <div className="max-md:hidden">
            <Button
              type="button"
              modalToOpen="add-task"
              disabled={selectedBoardData?.columns?.length === 0}
              label="+ Add New Task"
              openModal={setModalType}
            />
          </div>
          <div className="md:hidden">
            <button
              className="py-4 px-6 disabled:bg-primary-700 disabled:cursor-not-allowed cursor-pointer transition duration-150 rounded-4xl base-bold button-primary"
              disabled={selectedBoardData?.columns?.length === 0}
            >
              <img src="/icons/icon-add-task-mobile.svg" alt="" />
            </button>
          </div>

          <Menubar className="focus:ring-0 focus:outline-none focus:border-none border-0 background-light900_dark400 shadow-none outline-0">
            <MenubarMenu>
              <MenubarTrigger className="border-0 cursor-pointer bg-transparent bg-da outline-0">
                <img src="/icons/icon-vertical-ellipsis.svg" alt="menu" />
              </MenubarTrigger>
              <MenubarContent className="relative px-2 py-4 shadow-none paragraph-medium text-light-600 border-0 background-light900_dark300 top-3 right-8">
                <MenubarItem
                  onClick={() => setModalType("edit-board")}
                  className="cursor-pointer hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit"
                >
                  Edit Board
                </MenubarItem>
                <MenubarItem
                  onClick={() => setModalType("delete-board")}
                  className="cursor-pointer text-red-500 hover:bg-transparent hover:text-red-500 focus:bg-transparent focus:text-red-500"
                >
                  Delete Board
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
