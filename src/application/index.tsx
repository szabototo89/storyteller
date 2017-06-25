import * as React from 'react';

import './style.scss';
import state from '../state';
import Storyboard from "../storyboard/storyboard";

const Application = () => {
  const goals = state.goals;
  return <Storyboard goals={goals} />
};

export default Application; 