import { data } from "@/constants";
import React from "react";

const LeftSidebar = () => {
  return (
    <div className=" w-[300px] flex flex-col justify-between px-8 py-4 h-screen  base-bold text-light-600  bg-light-900 ">
      {/* boards */}
      <div>
        <p>ALL BOARDS (3)</p>
        <ul className="my-8 flex flex-col gap-6">
          {data.boards.map((board) => (
            <li className="flex items-center gap-4" key={board.name}>
              <img src="/icons/icon-board.svg" alt="board" />
              {board.name}
            </li>
          ))}
        </ul>
      </div>
      {/* controls */}
      <div>
        <div className="flex mb-6 items-center justify-center gap-6 bg-light-800 px-2 py-3 rounded-sm ">
          <img src="/icons/icon-light-theme.svg" alt="light-theme" />
          switch
          <img src="/icons/icon-dark-theme.svg" alt="dark-theme" />
        </div>
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
