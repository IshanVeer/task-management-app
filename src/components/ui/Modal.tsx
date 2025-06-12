import { useEffect } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div>{children}</div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
