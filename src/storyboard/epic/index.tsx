import * as React from "react";
import { Story as StoryModel } from "models/story";
import { Container } from "common/container";
import { Story } from "storyboard/story";
import { BasicEventHandler } from "utils/eventHandler";

import "storyboard/epic/style";
import { Epic as EpicModel } from "models/epic";

type Properties = {
  content?: string;
  stories?: Array<StoryModel>;
  onSelected?: BasicEventHandler;
};

export const Epic = ({ content, stories = [], onSelected }: Properties) => {
  const handleFocus = () => onSelected && onSelected();

  return (
    <Container className="epic">
      <Container
        className="epic__header"
        isFocusable={true}
        onFocus={handleFocus}
      >
        {content}
      </Container>
      <Container className="epic__body">
        {stories.map(story => <Story key={story.id} content={story.content} />)}
      </Container>
    </Container>
  );
};
