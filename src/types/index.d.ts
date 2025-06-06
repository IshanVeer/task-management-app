export interface SubTaskProps {
  title: string;
  isCompleted: boolean;
}

export interface TaskProps {
  title: string;
  descrptions: string;
  status: string;
  subtasks: SubTask[];
}
export interface ColumnProps {
  name: string;
  tasks: Task[];
}
export interface BoardProps {
  id: string;
  name: string;
  columns: Column[];
}
export interface BoardDataProps {
  boards: Board[];
}
