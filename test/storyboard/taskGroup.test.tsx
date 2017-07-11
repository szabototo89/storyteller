import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ReactWrapper } from "enzyme";

import { TaskGroup } from "storyboard/taskGroup";
import { aTaskGroup } from "test/builders/taskGroupBuilder";
import { equalsText } from "test/utils/enzymeHelpers";
import { aTaskWithId } from "test/builders/taskBuilder";

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

    const containsName = equalsText(component)("test");
    expect(containsName).is.true;
  });

  it("shows task contents when there is associated task to group", () => {
    const taskGroup = aTaskGroup()
      .withTasksByEpic(
        [
          aTaskWithId().withContent("test content"),
          aTaskWithId().withContent("test content 2")
        ],
        [
          aTaskWithId().withContent("test content 3"),
          aTaskWithId().withContent("test content 4")
        ]
      )
      .build();

    const component = mount(<TaskGroup taskGroup={taskGroup} />);

    const containsTaskContents = [
      "test content",
      "test content 2",
      "test content 3",
      "test content 4"
    ].every(equalsText(component));
    expect(containsTaskContents).is.true;
  });
});
