import { Task } from "models/task";

export type TaskGroup = {
  id: string;
  name: string;
  tasks: Array<Task>;
};
