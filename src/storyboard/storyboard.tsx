import * as React from 'react';
import Goal from "../models/goal";
import GoalCard from '../storyboard/goalCard';
import DetailGroupList from "./detailGroupList";
import DetailGroup from "../models/detailGroup";
import Story from "../models/story";

type Properties = {
  goals: Array<Goal>;
};

const Storyboard = ({ goals = [] }: Properties) => {
  // const stories: Array<Story> = goals.map(goal => goal.stories)
  //                                    .reduce(((previousValue, currentValue) => [ ...previousValue, ...currentValue ]), []);
  //
  // const detailGroups: Array<DetailGroup> = stories.map(story => story.details);

  const detailGroups: Array<DetailGroup> = [];

  return <div>
    {goals.map(goal =>
      <GoalCard key={goal.id}
                name={goal.title}
                stories={goal.stories} />
    )}
    <DetailGroupList detailGroups={detailGroups} />
  </div>;
};

export default Storyboard;