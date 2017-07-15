import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ReactWrapper } from "enzyme";

import { TaskGroup } from "storyboard/taskGroup";
import { aTaskGroup } from "test/testBuilders/taskGroupBuilder";
import { equalsText, equals } from "test/testUtils/enzymeHelpers";
import { aTaskWithId } from "test/testBuilders/taskBuilder";
import { build } from "test/testUtils/testBuilder";
import { aStory } from "test/testBuilders/storyBuilder";

describe("TaskGroup component", () => {
  const checkClassNames = (classNames: Array<string>) => (
    htmlElement: ReactWrapper<any, any>
  ) => classNames.every(className => htmlElement.find(className).exists());

  it("contains a .task-group html element", () => {
    const component = mount(<TaskGroup />);

    const classNamesExistWithin = checkClassNames([".task-group"]);
    expect(classNamesExistWithin(component)).is.true;
  });

  it("has .task-group__header and .task-group__body elements within the component", () => {
    const taskGroupHtmlElement = mount(<TaskGroup />).find(".task-group");

    const classNamesExistWithin = checkClassNames([
      ".task-group__header",
      ".task-group__body"
    ]);
    expect(classNamesExistWithin(taskGroupHtmlElement)).is.true;
  });

  it("shows task group name", () => {
    const taskGroup = aTaskGroup().withName("test").build();

    const component = mount(<TaskGroup taskGroup={taskGroup} />);

    const containsName = equals(component).textTo("test");
    expect(containsName).is.true;
  });

  it("shows task contents when there is associated task to group", () => {
    const taskGroup = aTaskGroup().withName("test task group");
    const stories = build([
      aStory()
        .withId("1")
        .withTasks(
          aTaskWithId().withTaskGroup(taskGroup).withContent("test content"),
          aTaskWithId().withTaskGroup(taskGroup).withContent("test content 2")
        ),
      aStory()
        .withId("2")
        .withTasks(
          aTaskWithId().withTaskGroup(taskGroup).withContent("test content 3"),
          aTaskWithId().withTaskGroup(taskGroup).withContent("test content 4")
        )
    ]);

    const component = mount(
      <TaskGroup taskGroup={taskGroup.build()} stories={stories} />
    );

    const containsTaskContents = [
      "test content",
      "test content 2",
      "test content 3",
      "test content 4"
    ].every(equalsText(component));
    expect(containsTaskContents).is.true;
  });
});
