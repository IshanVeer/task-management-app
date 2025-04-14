import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="bg-light-900 border-b border-light-700 w-full sticky top-0  items-center justify-between flex px-8 py-7">
      <h1 className="h1-bold">Board Title</h1>
      <div className="flex items-center gap-4 ">
        <Button label="+ Add New Task" />

        <img src="/icons/icon-vertical-ellipsis.svg" alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
