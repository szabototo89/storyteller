import { Story } from "models/story";
import { Epic } from "models/epic";

import { WeakType } from "test/utils/weakType";
import { TestBuilder, isRequired } from "test/utils/testBuilder";

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

  withStories(...stories: Array<Story>): EpicBuilder {
    return this.copy({ stories });
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
      content: isRequired(epic.content, { defaultValue: '' }),
      stories: isRequired(epic.stories, { defaultValue: [] })
    };
  } 
}

export function anEpic() {
  return new EpicBuilder();
}
