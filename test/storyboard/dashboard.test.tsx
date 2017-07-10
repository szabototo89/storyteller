import * as React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";

import { Dashboard } from "storyboard/dashboard";
import { EpicBuilder, anEpic, anEpicWithId } from "test/builders/epicBuilder";
import { TaskGroup } from "models/taskGroup";
import { aTask } from "test/builders/taskBuilder";
import { aTaskGroup } from "test/builders/taskGroupBuilder";
import { build } from "test/utils/builder";
import { equalsText } from "test/utils/enzymeHelpers";
import { Epic } from "models/epic";
import { aStoryWithId } from "test/builders/storyBuilder";

describe("Dashboard component", () => {
  it("should have a .dashboard element", () => {
    const component = shallow(<Dashboard />);

    const element = component.find(".dashboard");

    expect(element.exists()).is.true;
  });

  describe("epics", () => {
    it("are got as property", () => {
      const epics = build([anEpic()]);

      const passingEpics = () => shallow(<Dashboard epics={epics} />);

      expect(passingEpics).does.not.throw();
    });

    it("is optional", () => {
      const epics = undefined;

      const passingEpics = () => shallow(<Dashboard epics={epics} />);

      expect(passingEpics).does.not.throw();
    });

    it("shows every epic content", () => {
      const epics = build([
        anEpicWithId().withContent("test epic"),
        anEpicWithId().withContent("test epic 2")
      ]);

      const component = mount(<Dashboard epics={epics} />);

      const containsEveryEpicContent = ["test epic", "test epic 2"].every(
        equalsText(component)
      );
      expect(containsEveryEpicContent).is.true;
    });

    it("shows every story content", () => {
      const epics = build([
        anEpicWithId().withStories(
          aStoryWithId().withContent("test content"),
          aStoryWithId().withContent("test content 2")
        ),
        anEpicWithId().withStories(aStoryWithId().withContent("test content 3"))
      ]);

      const component = mount(<Dashboard epics={epics} />);

      const containsEveryStoryContent = [
        "test content",
        "test content 2",
        "test content 3"
      ].every(equalsText(component));
      expect(containsEveryStoryContent).is.true;
    });

    it("shows every task content", () => {
      const epics = build([
        anEpicWithId().withStories(
          aStoryWithId()
            .withContent("test content")
            .withTasks(
              aTask().withContent("test task 1"),
              aTask().withContent("test task 2")
            )
        )
      ]);

      const component = mount(<Dashboard epics={epics} />);

      const containsEveryTaskContent = ["test task 1", "test task 2"].every(
        equalsText(component)
      );
      expect(containsEveryTaskContent).is.true;
    });
  });
});
