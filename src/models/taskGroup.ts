import { Task } from "models/task";

export type TaskGroup = {
  id: string;
  name: string;
  tasksByEpic?: Array<Array<Task>>;
};
