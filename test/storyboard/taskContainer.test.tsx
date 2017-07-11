import * as React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";

import { TaskContainer } from "storyboard/taskContainer";
import { aTaskWithId } from "test/builders/taskBuilder";
import { build } from "test/utils/testBuilder";
import { equalsText } from "test/utils/enzymeHelpers";

describe("TaskContainer component", () => {
  it("contains task-container html element", () => {
    const component = mount(<TaskContainer />);

    expect(component.find(".task-container").exists()).is.true;
  });

  it("shows tasks when more tasks has been passed", () => {
    const tasks = build([
      aTaskWithId().withContent("test task"),
      aTaskWithId().withContent("test task 2")
    ]);

    const component = mount(<TaskContainer tasks={tasks} />);

    const containsTaskContents = ["test task", "test task 2"].every(
      equalsText(component)
    );
    expect(containsTaskContents).is.true;
  });
});
