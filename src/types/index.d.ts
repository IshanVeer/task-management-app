export interface SubTaskProps {
  title: string;
  isCompleted: boolean;
}

export interface TaskProps {
  title: string;
  description: string;
  status: string;
  subtasks: SubTaskProps[];
}

export interface ColumnProps {
  name: string;
  tasks: TaskProps[];
}

export interface BoardProps {
  id: string;
  name: string;
  columns: ColumnProps[];
}

export interface BoardDataProps {
  boards: BoardProps[];
}

export type ModalType =
  | "add-task"
  | "edit-task"
  | "add-board"
  | "edit-board"
  | "delete-board"
  | "delete-task"
  | "task-detail"
  | null;
