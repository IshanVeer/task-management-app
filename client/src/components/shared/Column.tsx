import React from "react";
import { generateRandomColor } from "@/lib/utils";

interface Columnprops {
  name: string;
  taskQty: number;
}

const Column = ({ name, taskQty }: Columnprops) => {
  const randomColor = generateRandomColor();
  return (
    <div>
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-[100%]"
          style={{ backgroundColor: randomColor }}
        ></div>

        <p className="text-light-600 base-bold">{name}</p>
        <p className="text-light-600 base-bold">({taskQty})</p>
      </div>
    </div>
  );
};

export default Column;
