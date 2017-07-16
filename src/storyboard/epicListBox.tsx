import * as React from "react";
import { Epic as EpicModel } from "../models/epic";
import { Epic } from "./epic";
import { Container } from "common/container";
import { EventHandler } from "utils/eventHandler";

type Properties = {
  epics?: Array<EpicModel>;
  onEpicSelected?: EventHandler<EpicModel>;
};

export const EpicListBox = ({ epics = [], onEpicSelected }: Properties) => {
  const handleEpicSelected = (epic: EpicModel) => () => {
    onEpicSelected && onEpicSelected(epic);
  };

  return (
    <Container className="epic-list-box">
      {epics.map(epic =>
        <Epic
          key={epic.id}
          content={epic.content}
          stories={epic.stories}
          onSelected={handleEpicSelected(epic)}
        />
      )}
    </Container>
  );
};
