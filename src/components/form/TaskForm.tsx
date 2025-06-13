import Card from "../ui/Card";
import Button from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { BoardProps } from "@/types";

interface Props {
  selectedBoard: BoardProps;
  mode?: string;
}

const TaskForm = ({ selectedBoard, mode }: Props) => {
  return (
    <Card>
      {mode === "edit" ? (
        <h2 className="h2-bold">Edit Task</h2>
      ) : (
        <h2 className="h2-bold">Add New Task</h2>
      )}

      <form className="py-4" action="submit">
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
          />
        </div>
        {/* Subtasks input */}
        <div className="w-full mb-6">
          <p className="mb-3 body-bold text-light-600">Subtasks</p>
          <div className="w-full flex items-center gap-4">
            <input
              placeholder="e.g. Make coffee"
              className="px-4 placeholder:text-[13px] w-full py-2 border rounded-[4px]"
              id="subtask"
              type="text"
            />
            <button>
              <img src="/icons/icon-cross.svg" alt="delete-subtasks" />
            </button>
          </div>
          <Button
            classname="w-full mt-4"
            type="secondary"
            label="+ Add New Subtask"
          />
        </div>
        <DropdownMenu>
          <p className="mb-3 body-bold text-light-600">Status</p>
          <DropdownMenuTrigger className="flex w-full px-4 py-2 border rounded-[4px] items-center justify-between">
            <p>Todo</p>
            <img src="/icons/icon-chevron-down.svg" alt="dropdown" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[440px]">
            {selectedBoard.columns.map((column) => (
              <DropdownMenuItem key={column.name}>
                {column.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button classname="w-full mt-4" label="Create Task" />
      </form>
    </Card>
  );
};

export default TaskForm;
