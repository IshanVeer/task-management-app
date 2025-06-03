import { useTheme } from "@/context/ThemeProvider";
import Button from "../ui/Button";

const Navbar = () => {
  const { mode } = useTheme();
  return (
    <div className="flex items-center px-8 h-24  w-full">
      {/* logo container */}
      <div className="w-[300px] ">
        {mode === "dark" ? (
          <img src="/icons/logo-light.svg" alt="logo" />
        ) : (
          <img src="/icons/logo-dark.svg" alt="logo" />
        )}
      </div>
      {/* Board heading container */}
      <div className="flex flex-1 border-l h-full items-center justify-between">
        <h1 className="h1-bold px-6">Platform Launch</h1>
        <div className="flex items-center gap-4 ">
          <Button />
          <button className="cursor-pointer">
            <img src="/icons/icon-vertical-ellipsis.svg" alt="board-menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
