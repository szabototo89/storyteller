import { Task } from "models/task";

export type Story = {
  id: string;
  content: string;
  tasks: Array<Task>;
};
