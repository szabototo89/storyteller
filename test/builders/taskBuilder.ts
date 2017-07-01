import { TestBuilder } from "test/utils/testBuilder";
import { Task } from "models/task";
import { WeakType } from "test/utils/weakType";

export class TaskBuilder implements TestBuilder<Task> {
  constructor(private readonly task: Task) {}

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
    return this.task;
  }
}

export function aTask() {
  return new TaskBuilder({
    id: "1",
    content: "task content"
  });
}
