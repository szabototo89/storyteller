import * as React from "react";
import { Story } from "../models/story";

type Properties = {
  content?: string;
  stories?: Array<Story>;
};

export const Epic = ({ content, stories = [] }: Properties) =>
  <div className="epic">
    <div className="epic__header">
      {content}
    </div>
    <div className="epic__body">
      {stories.map(story =>
        <div key={story.id}>
          {story.content}
        </div>
      )} 
    </div>
  </div>;
