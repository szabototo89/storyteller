import * as React from 'react';
import StoryCard from '../storyboard/storyCard';
import state from '../state';

import './style.scss';

type ApplicationState = typeof state;

const Application = ({ cards }: ApplicationState) => {
  return <div>
    {cards.map(card => 
      <StoryCard key={card.id} content={card.content} />
    )}
  </div>;
}

export default Application; 