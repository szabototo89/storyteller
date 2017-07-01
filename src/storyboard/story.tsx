import * as React from "react";
import { Container } from "common/container";

type Properties = {
  content?: string;
};

export const Story = ({ content }: Properties) =>
  <Container className="story">
    {content}
  </Container>;
