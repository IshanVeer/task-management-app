import React from "react";

interface ButtonProps {
  type?: string;
}

const Button = ({ type }: ButtonProps) => {
  return (
    <div>
      <div
        className={`inline-block transition duration-150 cursor-pointer px-6 py-3 text-white base-bold rounded-3xl outline-0 ${
          type === "destructive"
            ? "button-destructive"
            : type === "secondary"
            ? "button-secondary"
            : "button-primary"
        }`}
      >
        Button primary
      </div>
    </div>
  );
};

export default Button;
