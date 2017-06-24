import * as React from 'react';
import StoryCard from '../storyboard/storyCard';

import './style.scss';

const Application = () => <div className="application">
  <StoryCard content="Hello World" />
  <StoryCard content="Hello World" />
  <StoryCard content="Hello World" />
</div>; 

export default Application;