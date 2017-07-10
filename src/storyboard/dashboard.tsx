import * as React from "react";
import { Epic } from "models/epic";
import { TaskGroup } from "models/taskGroup";
import { Container } from "common/container";
import { EpicContainer } from "storyboard/epicContainer";

type Properties = {
  epics?: Array<Epic>;
};

export const Dashboard = ({ epics = [] }: Properties) => {
  return (
    <Container className="dashboard">
      <EpicContainer epics={epics} />
      
    </Container>
  );
};
