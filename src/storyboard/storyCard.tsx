import * as React from 'react';
import './storyCard.scss';

interface Properties {
  content?: string;
}

const StoryCard = ({ content }: Properties) => {
  return <div className="story-card">
    {content}
  </div>; 
};

export default StoryCard;   