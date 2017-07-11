import * as React from "react";
import { Container } from "common/container";
import { Task as TaskModel } from "models/task";
import { Task } from "storyboard/task";

type Properties = {
  tasks?: Array<TaskModel>;
};

export const TaskContainer = ({ tasks = [] }: Properties) => {
  return (
    <Container className="task-container">
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </Container>
  );
};
