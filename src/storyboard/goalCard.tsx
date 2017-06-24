import * as React from 'react';
import StoryCard from './storyCard';
import Story from "../models/story";

type Properties = {
  name: string;
  stories: Array<Story>;
};

const GoalCard = ({name, stories}: Properties) => {
  return <div className="goal-card">
    <div className="goal-card__name">
      {name}
    </div>

    <div className="goal-card__stories">
      {stories.map(story =>
        <StoryCard key={story.id} content={story.content}/>
      )}
    </div>
  </div>
};

export default GoalCard;
