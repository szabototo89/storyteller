import * as React from 'react';
import Goal from "../models/goal";
import GoalCard from '../storyboard/goalCard';

import './style.scss';

type ApplicationState = {
  goals: Array<Goal>;
};

const Application = ({ goals = [] }: ApplicationState) => {
  return <div>
    {goals.map(goal =>
      <GoalCard key={goal.id}
                name={goal.title}
                stories={goal.stories} />
    )}

  </div>;
}

export default Application; 