import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="flex bg-light-900 justify-between items-center">
      {/* container left */}
      <div className="w-[300px] pl-8">
        <img src="/icons/logo-dark.svg" alt="logo" />
      </div>
      {/* container right */}
      <div className="border-l border-b px-8 py-6 flex-1  items-center flex  justify-between border-light-700">
        <h1 className="h1-bold">Board Title</h1>
        <div className="flex items-center gap-4">
          <Button label="+ Add New Task" />
          <button className="cursor-pointer">
            <img src="/icons/icon-vertical-ellipsis.svg" alt="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
