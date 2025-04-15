import { data } from "@/constants";
import React from "react";

import Theme from "./Theme";

interface SetSelectedBoardTypes {
  setSelectedBoard: (board: string) => void;
}

const LeftSidebar = ({ setSelectedBoard }: SetSelectedBoardTypes) => {
  return (
    <div className=" w-[300px] flex flex-col justify-between px-8 py-4 h-screen  base-bold text-light-600  background-light900_dark400 ">
      {/* boards */}
      <div>
        <p>ALL BOARDS (3)</p>
        <ul className="my-8 flex flex-col ">
          {data.boards.map((board) => (
            <li
              className="flex py-4 items-center gap-4 cursor-pointer hover:rounded-r-3xl -ml-8 px-8 hover:bg-button-800 hover:text-primary-500"
              key={board.name}
              onClick={() => setSelectedBoard(board.name)}
            >
              <img className="" src="/icons/icon-board.svg" alt="board" />
              {board.name}
            </li>
          ))}
        </ul>
      </div>
      {/* controls */}
      <div>
        <Theme />
        <button className="flex cursor-pointer items-center gap-4">
          <img
            src="../../../public/icons/icon-hide-sidebar.svg"
            alt="hide-sidebar"
          />
          <p>Hide Sidebar</p>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
