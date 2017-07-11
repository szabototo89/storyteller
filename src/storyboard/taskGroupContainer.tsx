import * as React from "react";
import { Container } from "common/container";
import { TaskGroup as TaskGroupModel } from "models/taskGroup";
import { TaskGroup } from "storyboard/taskGroup";
import { Task } from "models/task";

type Properties = {
  taskGroups?: Array<TaskGroupModel>;
  tasks?: Array<Task>;
};

export const TaskGroupContainer = ({ taskGroups }: Properties) =>
  <Container className="task-group-container">
    {taskGroups &&
      taskGroups.map(taskGroup =>
        <TaskGroup key={taskGroup.id} taskGroup={taskGroup} />
      )}
  </Container>;
