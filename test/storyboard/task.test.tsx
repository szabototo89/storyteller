import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ShallowWrapper } from "enzyme";

import { Task as TaskModel } from "models/task";
import { Task } from "storyboard/task";

import { findText, equals } from "test/testUtils/enzymeHelpers";
import { aTask } from "test/testBuilders/taskBuilder";

describe("Task component", () => {
  it("should have .task html element", () => {
    const component = mount(<Task />);

    const hasTaskClassElement = component.someWhere(child =>
      child.hasClass("task")
    );

    expect(hasTaskClassElement).to.be.true;
  });

  it("should show task content", () => {
    const task: TaskModel = aTask().withContent("lorem ipsum").build();
    const component = mount(<Task task={task} />);

    const containsTaskContent = equals(component).textTo("lorem ipsum");

    expect(containsTaskContent).to.be.true;
  });
});
