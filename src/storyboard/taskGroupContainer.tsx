import * as React from "react";
import { Container } from "common/container";
import { TaskGroup as TaskGroupModel } from "models/taskGroup";
import { TaskGroup } from "storyboard/taskGroup";
import { Task } from "models/task";
import { Story } from "models/story";

type Properties = {
  taskGroups?: Array<TaskGroupModel>;
  stories?: Array<Story>;
};

export const TaskGroupContainer = ({
  taskGroups = [],
  stories = []
}: Properties) =>
  <Container className="task-group-container">
    {taskGroups.map(taskGroup =>
      <TaskGroup key={taskGroup.id} taskGroup={taskGroup} stories={stories} />
    )}
  </Container>;
