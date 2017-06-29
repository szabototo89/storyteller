import * as React from "react";

type Properties = {
  epics?: Array<any>;
};

export const EpicContainer = ({ epics = [] }: Properties) =>
  <div className="epic-container">
    {epics.map((epic, index) => <div key={index} />)}
  </div>;
