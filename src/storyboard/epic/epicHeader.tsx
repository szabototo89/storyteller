import * as React from "react";
import { Container } from "common/container";
import { EventHandler } from "utils/eventHandler";
import { Epic } from "models/epic";

type Properties = {
  content?: string;
  onSelected?: EventHandler<Epic | null>;
};

export function EpicHeader({ content, onSelected }: Properties) {
  const handleFocus = () => onSelected && onSelected(null);

  return (
    <Container
      className="epic__header"
      isFocusable={true}
      onFocus={handleFocus}
    >
      {content}
    </Container>
  );
}
