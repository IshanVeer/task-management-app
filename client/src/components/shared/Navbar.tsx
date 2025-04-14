import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="bg-light-900 items-center justify-between flex px-8 py-10">
      <img src="/icons/logo-dark.svg" alt="logo" />
      <div className="flex items-center gap-4 ">
        <Button label="+ Add New Task" />

        <img src="/icons/icon-vertical-ellipsis.svg" alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
