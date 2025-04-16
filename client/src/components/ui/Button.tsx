import React from "react";

interface ButtonProps {
  type?: string;
  label: string;
  disabled?: boolean;
  className?: string;
  openModal?: React.Dispatch<
    React.SetStateAction<"add-board" | "add-task" | null>
  >;
}

const Button = ({
  type,
  label,
  disabled,
  className,
  openModal,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => openModal?.("add-task")}
      className={`${className} py-3 px-6 disabled:bg-primary-700 disabled:cursor-not-allowed cursor-pointer transition duration-150 rounded-4xl base-bold ${
        type === "secondary"
          ? "button-secondary "
          : type === "destruct"
          ? "button-destructive"
          : "button-primary"
      } `}
    >
      {label}
    </button>
  );
};

export default Button;
