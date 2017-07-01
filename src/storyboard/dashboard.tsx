import * as React from "react";
import { Epic } from "models/epic";
import { TaskGroup } from "models/taskGroup";

type Properties = {
  epics?: Array<Epic>;
  taskGroups?: Array<TaskGroup>
}

export const Dashboard = ({ taskGroups = [], epics = [] }: Properties) => {
  return <div className="dashboard">
    
  </div>;
};
