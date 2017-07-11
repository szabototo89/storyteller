import * as React from "react";
import { Container } from "common/container";
import { TaskGroup as TaskGroupModel } from "models/taskGroup";
import { Task } from "storyboard/task";
import { TaskContainer } from "storyboard/taskContainer";

type Properties = {
  taskGroup?: TaskGroupModel;
};

export const TaskGroup = ({ taskGroup }: Properties) => {
  return (
    <Container className="task-group">
      <Container className="task-group__header">
        {taskGroup && taskGroup.name}
      </Container>
      <Container className="task-group__body">
        {taskGroup && taskGroup.tasksByEpic &&
          taskGroup.tasksByEpic.map((tasks, index) =>
            <TaskContainer key={index} tasks={tasks} />
          )}
      </Container>
    </Container>
  );
};
