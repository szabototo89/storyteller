import * as React from "react";
import { Epic as EpicModel } from "../models/epic";
import { Epic } from "./epic";
import { Container } from "common/container";

type Properties = {
  epics?: Array<EpicModel>;
};

export const EpicListBox = ({ epics = [] }: Properties) => {
  return (
    <Container className="epic-list-box">
      {epics.map(epic =>
        <Epic
          key={epic.id}
          content={epic.content}
          stories={epic.stories}
        />
      )}
    </Container>
  );
};
