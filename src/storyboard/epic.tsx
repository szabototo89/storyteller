import * as React from "react";
import { Story as StoryModel } from "models/story";
import { Container } from "common/container";
import { Story } from "storyboard/story";

type Properties = {
  content?: string;
  stories?: Array<StoryModel>;
};

export const Epic = ({ content, stories = [] }: Properties) =>
  <Container className="epic">
    <Container className="epic__header">
      {content}
    </Container>
    <Container className="epic__body">
      {stories.map(story => <Story key={story.id} content={story.content} />)}
    </Container>
  </Container>;
