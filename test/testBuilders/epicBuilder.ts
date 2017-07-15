import { Epic } from "models/epic";

import { WeakType } from "test/testUtils/weakType";
import { TestBuilder, isRequired, build } from "test/testUtils/testBuilder";
import * as uuid from "uuid/v4";
import { StoryBuilder } from "test/testBuilders/storyBuilder";

export class EpicBuilder implements TestBuilder<Epic> {
  public constructor(private readonly epic: WeakType<Epic> = {}) {}

  private copy(epic: WeakType<Epic>) {
    return new EpicBuilder({
      ...this.epic,
      ...epic
    });
  }

  withId(id: string): EpicBuilder {
    return this.copy({ id });
  }

  withStories(...stories: Array<StoryBuilder>): EpicBuilder {
    return this.copy({
      stories: build(stories)
    });
  }

  withContent(content: string): EpicBuilder {
    return this.copy({ content });
  }

  getContent() {
    return this.epic.content;
  }

  build(): Epic {
    const { epic = {} } = this;

    return {
      id: isRequired(epic.id, { defaultValue: "10" }),
      content: isRequired(epic.content, { defaultValue: "" }),
      stories: isRequired(epic.stories, { defaultValue: [] })
    };
  }
}

export function anEpic() {
  return new EpicBuilder();
}

export function anEpicWithId() {
  return anEpic().withId(uuid());
}
