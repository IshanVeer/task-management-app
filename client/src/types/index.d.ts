export interface SubtasksProps {
  title: string;
  isCompleted: boolean;
}
export interface TasksProps {
  title: string;
  description: string;
  status: string;
  subtasks: SubtasksProps[];
}
export interface ColumnsProps {
  name: string;
  tasks: TasksProps[];
}

export interface BoardProps {
  id: number;
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
