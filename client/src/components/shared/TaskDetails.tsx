import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar";
import { useBoardContext } from "@/context/BoardProvider";
import { TasksProps, ModalTypes } from "@/types";

interface TaskDetailsProps {
  task?: TasksProps | null;

  setModalType: React.Dispatch<React.SetStateAction<ModalTypes>>;
}

const TaskDetails = ({ task, setModalType }: TaskDetailsProps) => {
  const { boards, selectedBoard } = useBoardContext();

  const board = boards.find((board) => board.name === selectedBoard);
  if (!task || !board) return null;
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-dark100_light900 h2-bold">{task.title}</h2>
        <Menubar className="focus:ring-0 focus:outline-none focus:border-none border-0 background-light900_dark400 shadow-none outline-0">
          <MenubarMenu>
            <MenubarTrigger className="border-0 cursor-pointer bg-transparent bg-da outline-0">
              <img src="/icons/icon-vertical-ellipsis.svg" alt="menu" />
            </MenubarTrigger>
            <MenubarContent className="relative px-4 rounded-md flex flex-col gap-3 w-[192px] py-4 shadow-none paragraph-medium text-light-600 border-0 background-light900_dark300 top-3 right-8">
              <MenubarItem className="cursor-pointer hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit">
                Edit Task
              </MenubarItem>
              <MenubarItem
                onClick={() => setModalType("delete-task")}
                className="cursor-pointer text-red-500 hover:bg-transparent hover:text-red-500 focus:bg-transparent focus:text-red-500"
              >
                Delete Task
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <p className="paragraph-medium my-4 text-light-600">{task.description}</p>
      <p className="h5-bold my-4 text-light600_light900">{`Subtasks(${
        task.subtasks.filter((subtask) => subtask.isCompleted).length
      } of${task.subtasks.length})`}</p>

      {task.subtasks.map((subtask) => (
        <div className="flex hover:bg-primary-500/40 dark:hover:bg-primary-500/40 transition-all duration-150  body-bold items-center gap-4 p-4 my-3 rounded-sm background-light800_dark300">
          <input
            className="w-4 h-4 cursor-pointer peer bg-light-900  border-0 border-light-500 rounded-xs checked:accent-primary-500 checked:border-transparent focus:outline-none"
            id={subtask.title}
            type="checkbox"
          />
          <label
            className="cursor-pointer peer-checked:line-through peer-checked:text-light-600"
            htmlFor={subtask.title}
          >
            {subtask.title}
          </label>
        </div>
      ))}

      <p className="h5-bold mb-2 mt-6 text-light600_light900">Current Status</p>

      <Select>
        <SelectTrigger className="w-full p-4 paragraph-medium">
          <SelectValue placeholder={task.status} />
        </SelectTrigger>
        <SelectContent>
          {board.columns.map((column) => (
            <SelectItem key={column.name} value={column.name}>
              {column.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaskDetails;
