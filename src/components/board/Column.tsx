import { randomHexColor } from "@/lib/utils";
import type { ColumnProps, ModalType, TaskProps } from "@/types";
import { useMemo } from "react";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  column: ColumnProps;
  openModalHandler: (modalType: ModalType, task?: TaskProps) => void;
}

const Column = ({ column, openModalHandler }: Props) => {
  const bgColor = useMemo(() => randomHexColor(), []);

  const { setNodeRef } = useDroppable({
    id: column.name,
  });
  return (
    <>
      {/* column title */}
      <div ref={setNodeRef} className="flex flex-col w-[280px]">
        <div className="flex text-light-600 body-bold mb-6 items-center gap-2">
          <div
            style={{ backgroundColor: bgColor }}
            className="w-4 h-4 rounded-full"
          ></div>
          <p>{column.name}</p>
          <p>({column.tasks.length})</p>
        </div>
        {/* task card */}

        {column.tasks.map((task) => (
          <TaskCard
            openModalHandler={openModalHandler}
            key={task.title}
            task={task}
          />
        ))}
      </div>
    </>
  );
};

export default Column;
