import * as React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";

import { Dashboard } from "storyboard/dashboard";
import { EpicBuilder, anEpic } from "test/builders/epicBuilder";
import { TaskGroup } from "models/taskGroup";
import { aTask } from "test/builders/taskBuilder";
import { aTaskGroup } from "test/builders/taskGroupBuilder";

describe("Dashboard component", () => {
  it("should have a .dashboard element", () => {
    const component = shallow(<Dashboard />);

    const element = component.find(".dashboard");

    expect(element.exists()).is.true;
  });

  describe("epics", () => {
    it("are got as property", () => {
      const aSimpleEpic = anEpic().build();

      const passingEpics = () => shallow(<Dashboard epics={[aSimpleEpic]} />);

      expect(passingEpics).does.not.throw();
    });

    it("is optional", () => {
      const passingEpics = () => shallow(<Dashboard epics={undefined} />);

      expect(passingEpics).does.not.throw();
    });
  });
});
