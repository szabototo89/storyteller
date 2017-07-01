import { Story } from "models/story";
import { Epic } from "models/epic";

import { WeakType } from "test/utils/weakType";
import { TestBuilder } from "test/utils/testBuilder";

export class EpicBuilder implements TestBuilder<Epic> {
  private constructor(
    public readonly id: string,
    public readonly stories: Array<Story>,
    public readonly content: string
  ) { }

  static anEpic() {
    return new EpicBuilder("", [], "");
  }

  private copy({ id, stories, content }: WeakType<Epic>) {
    return new EpicBuilder(
      id || this.id,
      stories || this.stories,
      content || this.content
    );
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

  build(): Epic {
    const { id, stories, content } = this;
    return { id, content, stories };
  }
}
