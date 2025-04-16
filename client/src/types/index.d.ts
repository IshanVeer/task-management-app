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
  name: string;
  columns: ColumnsProps[];
}
