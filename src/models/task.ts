import { TaskGroup } from "models/taskGroup";

export type Task = {
  id: string;
  content: string;
  taskGroup: TaskGroup;
};