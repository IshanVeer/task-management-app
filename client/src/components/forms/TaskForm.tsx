import { useState } from "react";
import Button from "../ui/Button";
import { useBoardContext } from "@/context/BoardProvider";
import { ref } from "firebase/database";
import { database } from "@/firebase";
import Board from "../shared/Board";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { boards, selectedBoard } = useBoardContext();

  const board = boards.find((board) => board.name === selectedBoard);
  const column = board?.columns.find((column) => column.name);
  console.log(board);

  const taskFormSubmitHandler = (event) => {
    event.preventDefault();

    const updatedTask = {
      title: taskName,
      description: taskDescription,
    };

    try {
      const taskRef = ref(
        database,
        `board/${board}/${board?.columns}/${board?.columns?.tasks?.task?.id}`
      );
    } catch (error) {}
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
