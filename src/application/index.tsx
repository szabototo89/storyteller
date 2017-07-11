import * as React from "react";
import { Dashboard } from "storyboard/dashboard";

import "application/style.scss";
import state from "state";

export const Application = () => {
  return <Dashboard {...state} />;
};
