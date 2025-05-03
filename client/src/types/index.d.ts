export interface SubtasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}
export interface TasksProps {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: SubtasksProps[];
}
export interface ColumnsProps {
  id: string;
  name: string;
  tasks: TasksProps[];
}

export interface BoardProps {
  id: string;
  name: string;
  columns: ColumnsProps[];
}

export type ModalTypes =
  | "add-board"
  | "add-task"
  | "delete-board"
  | "task-details"
  | "delete-task"
  | "edit-board"
  | null;
