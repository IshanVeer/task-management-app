import Card from "../ui/Card";
import Button from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { BoardProps, TaskProps } from "@/types";
import { useEffect, useState } from "react";
import { useBoardData } from "@/context/BoardProvider";

interface Props {
  selectedBoard: BoardProps;
  mode?: string;
  closeModalHandler: () => void;
  selectedTask?: TaskProps | undefined;
}

const TaskForm = ({ selectedBoard, mode, closeModalHandler }: Props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [subtasks, setSubtasks] = useState<string[]>([""]);
  const [taskNameInputError, setTaskNameInputError] = useState(false);
  const [subtasksInputErrors, setSubtasksInputErrors] = useState<boolean[]>([]);
  const [taskStatusError, setTaskStatusError] = useState(false);
  const [hasTriedSubmitting, setHasTriedSubmitting] = useState(false);
  const { createTask, editTask, selectedTask } = useBoardData();

  useEffect(() => {
    if (mode === "edit" && selectedTask) {
      setTaskName(selectedTask.title);
      setTaskDescription(selectedTask.description);
      setSubtasks(selectedTask.subtasks.map((subtask) => subtask.title));
      setTaskStatus(selectedTask.status);
      setSubtasksInputErrors(selectedTask.subtasks.map(() => false));
    }
  }, [mode, selectedTask]);

  // task name handler
  const taskNameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
    if (taskNameInputError && e.target.value.trim() !== "") {
      setTaskNameInputError(false);
    }
  };

  // description handler
  const taskDescriptionInputHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTaskDescription(e.target.value);
  };

  // subtask handler
  const subtaskChangeHandler = (index: number, value: string) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);

    if (subtasksInputErrors[index] && value.trim() !== "") {
      const updatedErrors = [...subtasksInputErrors];
      updatedErrors[index] = false;
      setSubtasksInputErrors(updatedErrors);
    }
  };

  const addSubtaskInputHandler = () => {
    setSubtasks([...subtasks, ""]);
  };

  const removeSubtaskHandler = (index: number) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(updatedSubtasks);
  };

  const submitTaskFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setHasTriedSubmitting(true);
    if (!taskName.trim()) {
      setTaskNameInputError(true);
      return;
    }
    const subtaskErrors = subtasks.map((subtask) => subtask.trim() === "");

    if (subtaskErrors.some((error) => error)) {
      setSubtasksInputErrors(subtaskErrors);
      return;
    }
    if (!taskStatus.trim()) {
      setTaskStatusError(true);
      return;
    }
    if (mode === "edit" && selectedTask) {
      editTask(
        selectedTask.id,
        taskName,
        subtasks,
        taskDescription,
        taskStatus
      );
    } else {
      createTask(taskName, subtasks, taskDescription, taskStatus);
    }

    closeModalHandler();
  };

  return (
    <Card>
      {mode === "edit" ? (
        <h2 className="h2-bold">Edit Task</h2>
      ) : (
        <h2 className="h2-bold">Add New Task</h2>
      )}

      <form onSubmit={submitTaskFormHandler} className="py-4" action="submit">
        {/* title input */}
        <div className="flex flex-col gap-3 mb-6">
          {" "}
          <label className="body-bold text-light-600" htmlFor="title">
            Title
          </label>
          <input
            className={`px-4 py-2 placeholder:text-[13px] focus:outline-none border rounded-[4px] ${
              taskNameInputError && hasTriedSubmitting
                ? "placeholder:text-red-500 border-red-500"
                : ""
            }`}
            placeholder={
              taskNameInputError && hasTriedSubmitting
                ? "Can't be empty"
                : "e.g. Take coffee break"
            }
            id="title"
            type="text"
            onChange={taskNameInputHandler}
            value={taskName}
          />
        </div>
        {/* description input */}
        <div className="flex flex-col gap-3 mb-6">
          {" "}
          <label className="body-bold text-light-600" htmlFor="description">
            Description
          </label>
          <textarea
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
                          recharge the batteries a little."
            className="h-28 px-4 py-2 placeholder:text-[13px] border rounded-[4px]"
            id="description"
            onChange={taskDescriptionInputHandler}
            value={taskDescription}
          />
        </div>
        {/* Subtasks input */}
        <div className="w-full mb-6">
          <p className="mb-3 body-bold text-light-600">Subtasks</p>
          {subtasks.map((subtask, index) => (
            <div
              key={`subtask-${index}`}
              className="w-full flex my-4 items-center gap-4"
            >
              <input
                placeholder={
                  subtasksInputErrors[index] && hasTriedSubmitting
                    ? "Can't be empty"
                    : "e.g. Make coffee"
                }
                value={subtask}
                className={`px-4 focus:outline-none placeholder:text-[13px] w-full py-2 border rounded-[4px] ${
                  subtasksInputErrors[index] && hasTriedSubmitting
                    ? "placeholder:text-red-500 border-red-500"
                    : ""
                }`}
                id="subtask"
                type="text"
                onChange={(e) => subtaskChangeHandler(index, e.target.value)}
              />
              <button
                onClick={() => removeSubtaskHandler(index)}
                className="cursor-pointer"
              >
                <img src="/icons/icon-cross.svg" alt="delete-subtasks" />
              </button>
            </div>
          ))}

          <Button
            action="add-subtask"
            classname="w-full mt-4"
            buttonStyle="secondary"
            label="+ Add New Subtask"
            addSubtaskHandler={addSubtaskInputHandler}
          />
        </div>
        <DropdownMenu>
          <p className="mb-3 body-bold text-light-600">Status</p>
          <DropdownMenuTrigger
            className={`${
              taskStatusError && hasTriedSubmitting ? "border-red-500" : ""
            } flex w-full px-4 py-2 border rounded-[4px] items-center justify-between`}
          >
            <p
              className={
                taskStatusError && hasTriedSubmitting ? "text-red-500" : ""
              }
            >
              {taskStatus || "Select Status"}
            </p>
            <img src="/icons/icon-chevron-down.svg" alt="dropdown" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[440px]">
            {selectedBoard.columns.map((column) => (
              <DropdownMenuItem
                onSelect={() => {
                  setTaskStatus(column.name);
                  if (taskStatusError && taskStatus.trim()) {
                    setTaskStatusError(false);
                  }
                }}
                key={column.name}
              >
                {column.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          action="submit-task-Form"
          classname="w-full mt-4"
          label={mode === "edit" ? "Edit Task" : "Create Task"}
          typeButton="submit"
        />
      </form>
    </Card>
  );
};

export default TaskForm;
