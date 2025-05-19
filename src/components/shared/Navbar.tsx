import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="flex items-center px-8 py-6 w-full">
      {/* logo container */}
      <div className="w-[300px]">
        <img src="/icons/logo-dark.svg" alt="logo" />
      </div>
      {/* Board heading container */}
      <div className="flex items-center w-full border-l-2  justify-between">
        <h1 className="h1-bold px-4">Platform Launch</h1>
        <div className="flex items-center gap-4">
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
