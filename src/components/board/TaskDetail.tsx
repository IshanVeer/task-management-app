import React from "react";
import Card from "../ui/Card";
import type { ModalType, TaskProps } from "@/types";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useBoardData } from "@/context/BoardProvider";

interface TaskDetailProps {
  selectedTask?: TaskProps | undefined;
  openModalHandler: (modalType: ModalType, task?: TaskProps) => void;
}

const TaskDetail = ({ openModalHandler }: TaskDetailProps) => {
  const { selectedBoard, selectedTask } = useBoardData();
  const totalSubtasks = selectedTask?.subtasks.length;
  const completedSubtasks = selectedTask?.subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;

  const checkedSvg = `url('/icons/icon-check.svg')`;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="w-[90%]">
          <h2 className="h2-bold text-dark100_light900">
            {selectedTask?.title}
          </h2>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <img
              className="w-full object-cover"
              src="/icons/icon-vertical-ellipsis.svg"
              alt="board-menu"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="paragraph-medium absolute w-[192px] px-2 py-3 top-0 right-0">
            <DropdownMenuItem
              onClick={() => openModalHandler("edit-task")}
              className="text-light-600 py-2 cursor-pointer"
            >
              Edit Task
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => openModalHandler("delete-task")}
              className="text-red-500 py-2 cursor-pointer"
            >
              Delete Task
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p className="paragraph-medium my-5 text-light-600">
        {selectedTask?.description}
      </p>

      <p className="body-bold text-light-600">{`Subtasks(${completedSubtasks} of ${totalSubtasks}) `}</p>

      <form className="my-5" action="submit">
        {selectedTask?.subtasks.map((subtask) => (
          <div
            className="flex items-center background-light800_darkCustom p-3 mb-3 rounded-xs body-bold gap-3"
            key={subtask.title}
          >
            <input
              className="appearance-none  rounded-xs border-1 w-4 h-4 bg-white checked:bg-primary-500 checked:text-transparent checked:border-primary-500 focus:outline-none focus:ring-0 checked:bg-no-repeat checked:bg-center
                checked:bg-contain"
              style={{ backgroundImage: checkedSvg }}
              id={subtask.title}
              type="checkbox"
            />
            <label className="w-[90%]" htmlFor={subtask.title}>
              {subtask.title}
            </label>
          </div>
        ))}
        <div className="mt-6">
          <DropdownMenu>
            <p className="mb-3 body-bold text-light-600">Current Status</p>
            <DropdownMenuTrigger className="flex w-full px-4 py-2 border rounded-[4px] items-center justify-between">
              <p>{selectedTask?.status}</p>
              <img src="/icons/icon-chevron-down.svg" alt="dropdown" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[440px]">
              {selectedBoard?.columns.map((column) => (
                <DropdownMenuItem key={column.name}>
                  {column.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </form>
    </Card>
  );
};

export default TaskDetail;
