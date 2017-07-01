import { TestBuilder, isRequired } from "test/utils/testBuilder";
import { Task } from "models/task";
import { WeakType } from "test/utils/weakType";

export class TaskBuilder implements TestBuilder<Task> {
  constructor(private readonly task: WeakType<Task> = {}) {}

  private copy(task: WeakType<Task>) {
    return new TaskBuilder({
      ...this.task,
      ...task
    });
  }

  withId(id: string): TaskBuilder {
    return this.copy({ id });
  }

  withContent(content: string): TaskBuilder {
    return this.copy({ content });
  }

  build(): Task {
    const { task = {} } = this;

    return {
      id: isRequired(task.id, { defaultValue: "1" }),
      content: isRequired(task.content)
    };
  }
}

export function aTask() {
  return new TaskBuilder();
}
