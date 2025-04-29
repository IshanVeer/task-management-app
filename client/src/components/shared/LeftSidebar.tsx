import Theme from "./Theme";

interface BoardsProps {
  name: string;
}

interface SetSelectedBoardTypes {
  setSelectedBoard: (board: string) => void;
  boards: BoardsProps[];
  selectedBoard: string;
  setShowSidebar: (show: boolean) => void;
  setModalType: React.Dispatch<
    React.SetStateAction<"add-board" | "add-task" | "delete-board" | null>
  >;
}

const LeftSidebar = ({
  setSelectedBoard,
  selectedBoard,
  setShowSidebar,
  setModalType,
  boards,
}: SetSelectedBoardTypes) => {
  return (
    <div className=" max-sm:hidden  w-[300px] flex flex-col justify-between px-8 py-4   base-bold text-light-600  background-light900_dark400 ">
      {/* boards */}
      <div>
        <p>ALL BOARDS ({boards.length})</p>
        <ul className="mt-8 flex flex-col gap-1 ">
          {boards.map((board) => (
            <li
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
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setModalType("add-board");
          }}
          className="flex gap-4 my-4 cursor-pointer text-primary-500 items-center"
        >
          <img src="/icons/icon-board-button.svg" alt="icon button" />
          <p>+ Create New Board</p>
        </button>
      </div>
      {/* controls */}
      <div>
        <Theme />
        <button
          onClick={() => setShowSidebar(false)}
          className="flex cursor-pointer items-center gap-4"
        >
          <img src="/icons/icon-hide-sidebar.svg" alt="hide-sidebar" />
          <p>Hide Sidebar</p>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
