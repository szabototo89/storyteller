import { TestBuilder, isRequired } from "test/utils/testBuilder";
import { Story } from "models/story";
import { WeakType } from "test/utils/weakType";
import { TaskBuilder } from "test/builders/taskBuilder";

import { build } from "test/utils/testBuilder";
import * as uuid from "uuid/v4";

export class StoryBuilder implements TestBuilder<Story> {
  public constructor(private readonly story: WeakType<Story>) {}

  public withContent(content: string) {
    return this.copy({
      content
    });
  }

  public withId(id: string) {
    return this.copy({
      id
    });
  }

  public withTasks(...tasks: Array<TaskBuilder>) {
    return this.copy({
      tasks: build(tasks)
    });
  }

  private copy(story: WeakType<Story>) {
    return new StoryBuilder({
      ...this.story,
      ...story
    });
  }

  build(): Story {
    const { content, id, tasks } = this.story;

    return {
      content: isRequired(content, { defaultValue: "" }),
      id: isRequired(id, { defaultValue: "" }),
      tasks: isRequired(tasks, { defaultValue: [] })
    };
  }
}

export const aStory = () => {
  return new StoryBuilder({});
};

export const aStoryWithId = () => {
  return aStory().withId(uuid());
};
