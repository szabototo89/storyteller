import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ReactWrapper } from "enzyme";

import { TaskGroupContainer } from "storyboard/taskGroupContainer";
import { build } from "test/utils/testBuilder";
import { aTaskGroup } from "test/builders/taskGroupBuilder";
import { aTaskWithId, aTask } from "test/builders/taskBuilder";
import { equalsText } from "test/utils/enzymeHelpers";
import { aStory } from "test/builders/storyBuilder";

describe("TaskGroupContainer component", () => {
  it("contains .task-group-container html element", () => {
    const component = mount(<TaskGroupContainer />);

    expect(component.find(".task-group-container").exists()).is.true;
  });

  it("shows multiple task groups name", () => {
    const taskGroups = build([
      aTaskGroup().withName("task group 1").withId("1"),
      aTaskGroup().withName("task group 2").withId("2")
    ]);

    const component = mount(<TaskGroupContainer taskGroups={taskGroups} />);

    const showsTaskGroupNames = ["task group 1", "task group 2"].every(
      equalsText(component)
    );
    expect(showsTaskGroupNames).is.true;
  });

  it("shows tasks in the task groups", () => {
    const taskGroups = [aTaskGroup().withId("1"), aTaskGroup().withId("2")];
    const [firstTaskGroup, secondTaskGroup] = taskGroups;
    const stories = build([
      aStory()
        .withId("1")
        .withTasks(
          aTaskWithId()
            .withContent("test content")
            .withTaskGroup(firstTaskGroup)
        ),
      aStory()
        .withId("2")
        .withTasks(
          aTaskWithId()
            .withContent("test content 2")
            .withTaskGroup(firstTaskGroup),
          aTaskWithId()
            .withContent("test content 3")
            .withTaskGroup(secondTaskGroup)
        )
    ]);

    const component = mount(
      <TaskGroupContainer taskGroups={build(taskGroups)} stories={stories} />
    );

    const showsTaskContents = [
      "test content",
      "test content 2",
      "test content 3"
    ].every(equalsText(component));
    expect(showsTaskContents).is.true;
  });
});
