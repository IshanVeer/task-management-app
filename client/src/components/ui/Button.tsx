import React from "react";

interface ButtonProps {
  type?: string;
  label: string;
}

const Button = ({ type, label }: ButtonProps) => {
  return (
    <button
      className={` py-4 px-6 cursor-pointer transition duration-150 rounded-4xl base-bold ${
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
