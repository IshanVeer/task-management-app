import { useState } from "react";
import Button from "../ui/Button";
import { useBoardContext } from "@/context/BoardProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TaskFormProps {
  onClose: () => void;
}

const TaskForm = ({ onClose }: TaskFormProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { boards, selectedBoard } = useBoardContext();

  //TODO- get selected column using name

  const board = boards.find((board) => board.name === selectedBoard);

  const taskFormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //TODO- add error handling

    //TODO- update task and add task name, description and subtasks

    //TODO- push the tasks to path /boards/boardId/columns/columnId/tasks

    onClose();
  };

  return (
    <div>
      <h3 className="h2-bold">Add New Board</h3>
      <form action="submit" onSubmit={taskFormSubmitHandler}>
        {/* name */}
        <div className="flex flex-col gap-2 mt-4 mb-6">
          <label className="body-bold text-light-600" htmlFor="title">
            Title
          </label>
          <input
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            placeholder="e.g. Take a coffee break"
            className="border paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
            id="title"
            type="text"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-2 mt-4 mb-6">
          <label className="body-bold text-light-600" htmlFor="description">
            Title
          </label>
          <textarea
            value={taskDescription}
            onChange={(event) => setTaskDescription(event.target.value)}
            rows={3}
            className="border paragraph-medium text-dark-100 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
            id="description"
          />
        </div>

        {/* Subtasks */}
        <div className="flex flex-col gap-2 ">
          <label className="body-bold text-light-600" htmlFor="column">
            Subtasks
          </label>
          <div className="flex items-center gap-4 ">
            <input
              placeholder="e.g. Todo"
              className="border w-full paragraph-medium text-dark100_light900 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="remove-tasks" />
            </button>
          </div>
          <div className="flex items-center gap-4 ">
            <input
              placeholder="e.g. Doing"
              className="border w-full paragraph-medium text-dark100_light900 placeholder:text-xs p-2 px-4 placeholder:text-neutral-300 rounded-[4px]"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="remove-tasks" />
            </button>
          </div>
          <Button
            type="button"
            className="mt-2"
            buttonType="secondary"
            label="+ Add New Subtask"
          />
          <p className="h5-bold mb-2 mt-6 text-light600_light900">
            Current Status
          </p>

          <Select>
            <SelectTrigger className="w-full p-4 paragraph-medium">
              <SelectValue placeholder="todo" />
            </SelectTrigger>
            <SelectContent>
              {board?.columns.map((column) => (
                <SelectItem key={column.name} value={column.name}>
                  {column.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button type="submit" className="w-full mt-6" label="Create Task" />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
