import * as React from "react";
import { Epic } from "models/epic";
import { TaskGroup } from "models/taskGroup";
import { Container } from "common/container";
import { EpicListBox } from "storyboard/epicListBox";
import { TaskGroupContainer } from "storyboard/taskGroupContainer";
import { flatten } from "utils/arrayHelpers";

type Properties = {
  epics?: Array<Epic>;
  taskGroups?: Array<TaskGroup>;
};

export const Dashboard = ({ epics = [], taskGroups = [] }: Properties) => {
  const stories = flatten(epics.map(epic => epic.stories));

  return (
    <Container className="dashboard">
      <EpicListBox epics={epics} />
      <TaskGroupContainer taskGroups={taskGroups} stories={stories} />
    </Container>
  );
};
