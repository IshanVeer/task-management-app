import React from "react";

interface ButtonProps {
  buttonType?: string;
  label: string;
  disabled?: boolean;
  className?: string;
  openModal?: React.Dispatch<
    React.SetStateAction<"add-board" | "add-task" | null>
  >;
}

const Button = ({
  buttonType,
  label,
  disabled,
  className,
  openModal,
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => openModal?.("add-task")}
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
