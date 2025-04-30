import React from "react";
import { ModalTypes, TasksProps } from "@/types";
import { generateRandomColor } from "@/lib/utils";
import Card from "../card/Card";

interface Columnprops {
  name: string;
  taskQty: number;
  setSelectedTask: React.Dispatch<React.SetStateAction<TasksProps | null>>;
  tasks: TasksProps[];
  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
}

const Column = ({
  name,
  taskQty,
  tasks,
  setModalType,
  setSelectedTask,
}: Columnprops) => {
  const randomColor = generateRandomColor();
  return (
    <div className="w-[280px] flex-shrink-0 ">
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-[100%]"
          style={{ backgroundColor: randomColor }}
        ></div>

        <p className="text-light-600 base-bold">{name}</p>
        <p className="text-light-600 base-bold">({taskQty})</p>
      </div>

      <ul className="w-full">
        {(tasks || []).map((task) => (
          <li className="py-2" key={task.title}>
            <button
              onClick={() => {
                setSelectedTask(task);
                setModalType("task-details");
              }}
              className="w-full cursor-pointer text-left"
            >
              <Card title={task.title} subtasks={task.subtasks} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;
