import type { ModalType, TaskProps } from "@/types";
import React from "react";

interface Props {
  task: TaskProps;
  openModalHandler: (modalType: ModalType, task?: TaskProps) => void;
}

const TaskCard = ({ task, openModalHandler }: Props) => {
  const totalSubtasks = task.subtasks.length;
  const completedSubtasks = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  return (
    <div
      onClick={() => openModalHandler("task-detail", task)}
      className="w-full background-light900_dark300 cursor-pointer py-6 px-4 mb-4 rounded-md shadow-md/8"
    >
      <h3 className="base-bold text-dark100_light900 pb-2">{task.title}</h3>
      <p className="h5-bold text-light-600">{`${completedSubtasks} of${totalSubtasks} subtasks`}</p>
    </div>
  );
};

export default TaskCard;
