import * as React from 'react';
import StoryCard from '../storyboard/storyCard';

import './style.scss';

const Application = () => <div className="application">
  {[1, 2, 3].map(value => 
    <StoryCard key={value} content={value} />)
  }
</div>;

export default Application;