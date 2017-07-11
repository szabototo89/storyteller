import { TestBuilder, build } from "test/utils/testBuilder";
import { TaskGroup } from "models/taskGroup";
import { WeakType } from "test/utils/weakType";
import { TaskBuilder } from "test/builders/taskBuilder";

export class TaskGroupBuilder implements TestBuilder<TaskGroup> {
  constructor(private readonly taskGroup: TaskGroup) {}

  private copy(taskGroup: WeakType<TaskGroup>) {
    return new TaskGroupBuilder({
      ...this.taskGroup,
      ...taskGroup
    });
  }

  withId(id: string) {
    return this.copy({ id });
  }

  withName(name: string) {
    return this.copy({ name });
  }

  withTasksByEpic(...tasksByEpic: Array<Array<TaskBuilder>>) {
    return this.copy({
      tasksByEpic: tasksByEpic.map(tasks => build(tasks))
    });
  }

  build(): TaskGroup {
    return this.taskGroup;
  }
}

export function aTaskGroup() {
  return new TaskGroupBuilder({
    id: "1",
    name: 'test',
    tasksByEpic: []
  });
}