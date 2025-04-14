import { data } from "@/constants";
import React from "react";

const LeftSidebar = () => {
  return (
    <div className="w-[300px] border-r border-light-700 flex h-screen flex-col justify-between base-bold text-light-600 bg-light-900 p-8 ">
      <img src="/icons/logo-dark.svg" alt="logo" />
      {/* board names */}
      <div>
        <p>ALL BOARDS (3)</p>
        <ul className="flex flex-col">
          {data.boards.map((board) => (
            <li className="flex items-center" key={board.name}>
              <img src="/icons/icon-board.svg" alt="board" /> {board.name}
            </li>
          ))}
        </ul>
      </div>
      {/* controls */}
      <div>
        <div className="flex mb-4 items-center gap-6 bg-light-800 justify-center p-4 rounded-sm">
          <img src="/icons/icon-light-theme.svg" alt="light-theme" />
          switch
          <img src="/icons/icon-dark-theme.svg" alt="dark-theme" />
        </div>
        <button className="flex gap-4 cursor-pointer items-center">
          <img src="/icons/icon-hide-sidebar.svg" alt="hide side bar" />
          <p>Hide Sidebar</p>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
