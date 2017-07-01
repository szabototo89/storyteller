import * as React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";

import { Dashboard } from "storyboard/dashboard";
import { EpicBuilder } from "test/builders/epicBuilder";
import { TaskGroup } from "models/taskGroup";
import { aTask } from "test/builders/taskBuilder";
import { aTaskGroup } from "test/builders/taskGroupBuilder";

describe("Dashboard component", () => {
  it("should have a .dashboard element", () => {
    const component = shallow(<Dashboard />);

    const element = component.find(".dashboard");

    expect(element.exists()).is.true;
  });

  describe("task groups", () => {
    it("are got as property", () => {
      const aSimpleTask = aTask().withContent("Lorem ipsum dolor sit.");
      const taskGroup = aTaskGroup()
        .withId("1")
        .withName("lorem")
        .withTasks(aSimpleTask)
        .build();

      const passingTaskGroups = () =>
        shallow(<Dashboard taskGroups={[taskGroup]} />);

      expect(passingTaskGroups).does.not.throw();
    });

    it("is optional", () => {
      const passingUndefinedTaskGroups = () =>
        shallow(<Dashboard taskGroups={undefined} />);

      expect(passingUndefinedTaskGroups).does.not.throw();
    });
  });

  describe("epics", () => {
    it("are got as property", () => {
      const anEpic = EpicBuilder.anEpic().build();

      const passingEpics = () => shallow(<Dashboard epics={[anEpic]} />);

      expect(passingEpics).does.not.throw();
    });

    it("is optional", () => {
      const passingEpics = () => shallow(<Dashboard epics={undefined} />);

      expect(passingEpics).does.not.throw();
    });
  });
});
