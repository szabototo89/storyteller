import { TestBuilder, isRequired } from "test/utils/testBuilder";
import { Task } from "models/task";
import { WeakType } from "test/utils/weakType";
import * as uuid from "uuid/v4";
import { TaskGroupBuilder } from "test/builders/taskGroupBuilder";

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

  withTaskGroup(taskGroup: TaskGroupBuilder) {
    return this.copy({ taskGroupId: taskGroup.build().id });
  }

  build(): Task {
    const { task = {} } = this;

    return {
      id: isRequired(task.id, { defaultValue: "1" }),
      content: isRequired(task.content),
      taskGroupId: isRequired(task.taskGroupId, {
        defaultValue: "0"
      })
    };
  }
}

export function aTask() {
  return new TaskBuilder();
}

export function aTaskWithId() {
  return aTask().withId(uuid());
}
