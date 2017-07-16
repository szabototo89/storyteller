import * as React from "react";
import { Story as StoryModel } from "models/story";
import { Container } from "common/container";
import { Story } from "storyboard/story";
import { BasicEventHandler } from "utils/eventHandler";

import { Epic as EpicModel } from "models/epic";
import { EpicHeader } from "storyboard/epic/epicHeader";
import { EpicHeaderEditor } from "storyboard/epic/epicHeaderEditor";
import { EpicProperties as Properties } from "storyboard/epic/epicProperties";

import "storyboard/epic/style";

export function Epic(properties: Properties) {
  const { isEdited = false, content, stories = [] } = properties;
  const { onSelected } = properties;

  return (
    <Container className="epic">
      {!isEdited && <EpicHeader content={content} onSelected={onSelected} />}

      {isEdited && <EpicHeaderEditor content={content} />}

      <Container className="epic__body">
        {stories.map(story => <Story key={story.id} content={story.content} />)}
      </Container>
    </Container>
  );
};
