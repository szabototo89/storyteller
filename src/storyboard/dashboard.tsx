import * as React from "react";
import { Epic } from "models/epic";
import { TaskGroup } from "models/taskGroup";
import { Container } from "common/container";
import { EpicContainer } from "storyboard/epicContainer";
import { TaskGroupContainer } from "storyboard/taskGroupContainer";

type Properties = {
  epics?: Array<Epic>;
};

export const Dashboard = ({ epics = [] }: Properties) => {
  const taskGroups: Array<TaskGroup> = [];

  return (
    <Container className="dashboard">
      <EpicContainer epics={epics} />
      <TaskGroupContainer taskGroups={taskGroups} />
    </Container>
  );
};
