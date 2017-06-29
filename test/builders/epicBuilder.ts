import { Story } from "../../src/models/story";
import { Epic } from "../../src/models/epic";

export class EpicBuilder {
    private constructor(
      public readonly id: string,
      public readonly stories: Array<Story>,
      public readonly content: string
    ) {}

    static of() {
      return new EpicBuilder("", [], "");
    }

    private copy({
      id,
      stories,
      content
    }: {
      id?: string;
      stories?: Array<Story>;
      content?: string;
    }) {
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