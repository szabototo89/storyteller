import * as React from "react";

import "application/style.scss";
import state from "state";

export const Application = () => {
  const goals: any = state.goals;
  return <div>Application</div>;
};
