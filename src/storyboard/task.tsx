import * as React from "react";
import { Container } from "common/container";
import { Task as TaskModel } from "models/task";

type Properties = {
  task?: TaskModel;
};

export const Task = ({ task }: Properties) =>
  <Container className="task">
    {task && task.content}
  </Container>;
