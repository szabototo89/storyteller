import * as React from "react";
import { Story } from "models/story";
import { Container } from "common/container";

type Properties = {
  content?: string;
  stories?: Array<Story>;
};

export const Epic = ({ content, stories = [] }: Properties) =>
  <Container className="epic">
    <Container className="epic__header">
      {content}
    </Container>
    <Container className="epic__body">
      {stories.map(story =>
        <Container key={story.id}>
          {story.content}
        </Container>
      )} 
    </Container>
  </Container>;
