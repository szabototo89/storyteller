import * as React from "react";
import { Epic as EpicModel } from "../models/epic";
import { Epic } from "./epic";
import { Container } from "common/container";

type Properties = {
  epics?: Array<EpicModel>;
};

export const EpicContainer = ({ epics = [] }: Properties) =>
  <Container className="epic-container">
    {epics.map(epic => <Epic key={epic.id} content={epic.content} />)}
  </Container>; 
