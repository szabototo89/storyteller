import * as React from "react";
import { Container } from "common/container";
import { TaskGroup as TaskGroupModel } from "models/taskGroup";
import { Task } from "storyboard/task";
import { TaskContainer } from "storyboard/taskContainer";
import { WeakType } from "utils/weakType";
import { Story } from "models/story";

type Properties = {
  taskGroup?: WeakType<TaskGroupModel>;
  stories?: Array<Story>;
};

export const TaskGroup = ({ taskGroup = {}, stories = [] }: Properties) => {
  const tasksByTaskGroup = stories.map(story => {
    return {
      storyId: story.id,
      tasks:
        story.tasks &&
        story.tasks.filter(
          task => task.taskGroupId === taskGroup.id
        )
    };
  });

  return (
    <Container className="task-group">
      <Container className="task-group__header">
        {taskGroup.name}
      </Container>
      <Container className="task-group__body">
        {tasksByTaskGroup.map(tasks =>
          <TaskContainer key={tasks.storyId} tasks={tasks.tasks} />
        )}
      </Container>
    </Container>
  );
};
