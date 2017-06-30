import * as React from "react";

type Properties = {
  content?: string;
};

export const Story = ({ content }: Properties) =>
  <div className="story">
    {content}
  </div>;
