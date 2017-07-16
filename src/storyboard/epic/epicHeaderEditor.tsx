import * as React from "react";

import { Container } from "common/container";
import { TextBox } from "common/textBox";

type Properties = {
  content?: string;
  onValueChanged?: (value: string) => void;
};

export function EpicHeaderEditor({ content, onValueChanged }: Properties) {
  return (
    <Container className="epic-header-editor">
      <TextBox
        className="epic-header-editor__input"
        value={content}
        onChange={onValueChanged}
      />
    </Container>
  );
}
