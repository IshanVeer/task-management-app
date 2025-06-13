import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  closeModalHandler: () => void;
}
const Modal = ({ children, closeModalHandler }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div
      onClick={closeModalHandler}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
