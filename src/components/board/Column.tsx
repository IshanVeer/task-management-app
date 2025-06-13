import { randomHexColor } from "@/lib/utils";
import type { ColumnProps, ModalType, TaskProps } from "@/types";
import React, { useMemo } from "react";
import TaskCard from "./TaskCard";

interface Props {
  column: ColumnProps;
  openModalHandler: (modalType: ModalType, task?: TaskProps) => void;
}

const Column = ({ column, openModalHandler }: Props) => {
  const bgColor = useMemo(() => randomHexColor(), []);
  return (
    <>
      {/* column title */}
      <div className="flex flex-col w-[280px]">
        <div className="flex text-light-600 body-bold mb-6 items-center gap-2">
          <div
            style={{ backgroundColor: bgColor }}
            className="w-4 h-4 rounded-full"
          ></div>
          <p>{column.name}</p>
          <p>({column.tasks.length})</p>
        </div>
        {/* task card */}
        <div>
          {column.tasks.map((task) => (
            <TaskCard
              openModalHandler={openModalHandler}
              key={task.title}
              task={task}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
