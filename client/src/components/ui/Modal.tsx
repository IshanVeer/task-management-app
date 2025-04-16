import { createPortal } from "react-dom";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black opacity-65 "
      ></div>

      {/* Modal content */}
      <div className="background-light900_dark400 rounded-lg py-8 px-6 w-full max-w-md mx-4 z-10">
        {/* <div>{children}</div> */}
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
