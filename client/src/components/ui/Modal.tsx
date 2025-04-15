import { createPortal } from "react-dom";
import React from "react";

const Modal = () => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark backdrop */}
      <div className="fixed inset-0 bg-dark-100 opacity-75 "></div>

      {/* Modal content */}
      <div className="background-light900_dark400 rounded-lg p-6 w-full max-w-md mx-4 z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">title</h3>
        </div>
        {/* <div>{children}</div> */}
        <div>modal content</div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
