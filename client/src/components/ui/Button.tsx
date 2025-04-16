import React from "react";

interface ButtonProps {
  type?: string;
  label: string;
  disabled?: boolean;
  className?: string;
}

const Button = ({ type, label, disabled, className }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
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
