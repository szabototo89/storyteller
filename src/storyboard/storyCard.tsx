import * as React from 'react';

import TextBox from '../common/textBox';
import './storyCard.scss';

interface Properties {
  content?: string;
}

const StoryCard = ({ content }: Properties) => {
  return <div className="story-card">
    {content}
    <TextBox value={content} />
  </div>; 
};

export default StoryCard;   