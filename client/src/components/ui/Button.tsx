import React from "react";

interface ButtonProps {
  type?: string;
  label: string;
  disabled?: boolean;
}

const Button = ({ type, label, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={` py-4 px-6 disabled:bg-primary-700 disabled:cursor-not-allowed cursor-pointer transition duration-150 rounded-4xl base-bold ${
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
