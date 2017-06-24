import * as React from 'react';
import Goal from "../models/goal";
import GoalCard from '../storyboard/goalCard';

type Properties = {
  goals: Array<Goal>;
};

const Storyboard = ({ goals = [] }: Properties) => {
  return <div>
    {goals.map(goal =>
      <GoalCard key={goal.id}
                name={goal.title}
                stories={goal.stories} />
    )}

  </div>;
};

export default Storyboard;