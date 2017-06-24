import * as React from 'react';

import './style.scss';
import Goal from "../models/goal";
import Storyboard from "../storyboard/storyboard";

type Properties = {
  goals: Array<Goal>;
};

const Application = ({ goals = [] }: Properties) => {
  return <Storyboard goals={goals} />
};

export default Application; 