import * as React from "react";
import { Story } from "../models/story";

type Properties = {
  header?: string;
  stories?: Array<Story>;
};

export const Epic = ({ header, stories = [] }: Properties) =>
  <div className="epic">
    <div className="epic__header">
      {header}
    </div>
    <div className="epic__body">
      {stories.map(story =>
        <div key={story.id}>
          {story.content}
        </div>
      )} 
    </div>
  </div>;
