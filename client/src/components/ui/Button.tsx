import React from "react";

interface ButtonProps {
  buttonType?: string;
  onClose?: () => void;
  type: "button" | "submit" | "reset";
  label: string;
  modalToOpen?: "add-board" | "add-task" | "delete-event";
  disabled?: boolean;
  className?: string;
  openModal?: (modal: "add-board" | "add-task" | "delete-board") => void;
  onChange?: () => void;
}

const Button = ({
  buttonType,
  label,
  disabled,
  className,
  onClose,
  openModal,
  type,
  onChange,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => {
        if (onClose) onClose();
        if (onChange) onChange();
        if (openModal) openModal?.("add-task");
      }}
      className={`${className} py-3 px-6 disabled:bg-primary-700 disabled:cursor-not-allowed cursor-pointer transition duration-150 rounded-4xl base-bold ${
        buttonType === "secondary"
          ? "button-secondary "
          : buttonType === "destruct"
          ? "button-destructive"
          : "button-primary"
      } `}
    >
      {label}
    </button>
  );
};

export default Button;
