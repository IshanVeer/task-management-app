import { randomHexColor } from "@/lib/utils";
import type { ColumnProps } from "@/types";
import React, { useMemo } from "react";

interface Props {
  column: ColumnProps;
}

const Column = ({ column }: Props) => {
  const bgColor = useMemo(() => randomHexColor(), []);
  return (
    <>
      <div className="flex items-center gap-2">
        <div
          style={{ backgroundColor: bgColor }}
          className="w-4 h-4 rounded-full"
        ></div>
        <p>{column.name}</p>
        <p>({column.tasks.length})</p>
      </div>
    </>
  );
};

export default Column;
