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
      <div className="w-[300px] pl-8">
        {mode === "light" ? (
          <img src="/icons/logo-dark.svg" alt="logo-dark" />
        ) : (
          <img src="/icons/logo-light.svg" alt="logo-light" />
        )}
      </div>
      {/* container right */}
      <div className="border-l border-b px-8 py-6 flex-1  items-center flex  justify-between border-light">
        <h1 className="h1-bold">{selectedBoard}</h1>
        <div className="flex items-center gap-4">
          <Button
            disabled={selectedBoardData?.columns?.length === 0}
            label="+ Add New Task"
          />
          <button className="cursor-pointer">
            <img src="/icons/icon-vertical-ellipsis.svg" alt="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
