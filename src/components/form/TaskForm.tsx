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
  selectedTask: TaskProps | undefined;
}

const TaskForm = ({ selectedBoard, mode, closeModalHandler }: Props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [subtasks, setSubtasks] = useState<string[]>([""]);
  const { createTask, editTask, selectedTask } = useBoardData();

  useEffect(() => {
    if (mode === "edit" && selectedTask) {
      setTaskName(selectedTask.title);
      setTaskDescription(selectedTask.description);
      setSubtasks(selectedTask.subtasks.map((subtask) => subtask.title));
      setTaskStatus(selectedTask.status);
    }
  }, [mode, selectedTask]);

  // task name handler
  const taskNameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  // description handler
  const taskDescriptionInputHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    setTaskDescription(e.target.value);
  };

  // subtask handler
  const subtaskChangeHandler = (index: number, value: string) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
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
    if (!taskName) {
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
            className="px-4 py-2 placeholder:text-[13px] border rounded-[4px]"
            placeholder="e.g. Take coffee break"
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
                placeholder="e.g. Make coffee"
                value={subtask}
                className="px-4 placeholder:text-[13px] w-full py-2 border rounded-[4px]"
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
          <DropdownMenuTrigger className="flex w-full px-4 py-2 border rounded-[4px] items-center justify-between">
            <p>{taskStatus || "Select Status"}</p>
            <img src="/icons/icon-chevron-down.svg" alt="dropdown" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[440px]">
            {selectedBoard.columns.map((column) => (
              <DropdownMenuItem
                onSelect={() => {
                  setTaskStatus(column.name);
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
