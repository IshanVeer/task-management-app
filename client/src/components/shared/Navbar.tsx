import Button from "../ui/Button";
import { useTheme } from "@/context/ThemeProvider";
import { data } from "@/constants";

interface Navbarprops {
  selectedBoard: string;
}

const Navbar = ({ selectedBoard }: Navbarprops) => {
  const { mode } = useTheme();
  const selectedBoardData = data.boards.find(
    (board) => board.name === selectedBoard
  );
  return (
    <div className="flex background-light900_dark400 justify-between items-center">
      {/* container left */}
      <div className="pl-8 sm:hidden">
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
      <div className="border-l border-b px-8 py-6 flex-1 max-sm:border-l-0  items-center flex  justify-between border-light">
        <h1 className="h1-bold">{selectedBoard}</h1>
        <div className="flex items-center gap-4">
          <div className="max-md:hidden">
            <Button
              disabled={selectedBoardData?.columns?.length === 0}
              label="+ Add New Task"
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

          <button className="cursor-pointer">
            <img src="/icons/icon-vertical-ellipsis.svg" alt="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
