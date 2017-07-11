import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ReactWrapper } from "enzyme";

import { TaskGroupContainer } from "storyboard/taskGroupContainer";
import { build } from "test/utils/testBuilder";
import { aTaskGroup } from "test/builders/taskGroupBuilder";
import { aTaskWithId } from "test/builders/taskBuilder";
import { equalsText } from "test/utils/enzymeHelpers";

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
    const taskGroups = build([
      aTaskGroup().withId("1"),
      aTaskGroup()
        .withId("2")
        .withTasksByEpic(
          [
            aTaskWithId().withContent("test content"),
            aTaskWithId().withContent("test content 2")
          ],
          [aTaskWithId().withContent("test content 3")]
        )
    ]);

    const component = mount(<TaskGroupContainer taskGroups={taskGroups} />);

    const showsTaskContents = [
      "test content",
      "test content 2",
      "test content 3"
    ].every(equalsText(component));
    expect(showsTaskContents).is.true;
  });
});
