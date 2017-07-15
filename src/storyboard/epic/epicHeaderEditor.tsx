import * as React from "react";

import { Container } from "common/container";
import { TextBox } from "common/textBox";

type Properties = {
  onValueChanged?: (value: string) => void;
};

export const EpicHeaderEditor = ({ onValueChanged }: Properties) =>
  <Container className="epic-header-editor">
    <TextBox className="epic-header-editor__input" onChange={onValueChanged} />
  </Container>;
