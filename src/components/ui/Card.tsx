import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[480px] max-sm:w-[343px] background-light900_dark300 px-5 py-6 rounded-sm">
      {children}
    </div>
  );
};

export default Card;
