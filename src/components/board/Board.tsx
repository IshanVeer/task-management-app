import React from "react";

interface Props {
  showSidebar: boolean;
  showSideBarHandler: () => void;
}

const Board = ({ showSidebar, showSideBarHandler }: Props) => {
  return (
    <div className="h-[100vh] relative">
      {!showSidebar && (
        <button
          onClick={() => showSideBarHandler()}
          className="bg-primary-500 cursor-pointer p-6 absolute bottom-12 rounded-r-4xl"
        >
          <img
            className="w-6"
            src="/public/icons/icon-show-sidebar.svg"
            alt="show-sidebar"
          />
        </button>
      )}
    </div>
  );
};

export default Board;
