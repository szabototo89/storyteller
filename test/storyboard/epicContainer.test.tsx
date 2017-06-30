import * as React from "react";
import { expect } from "chai";
import { render, mount, shallow, ShallowWrapper } from "enzyme";

import { EpicBuilder } from "test/builders/epicBuilder";
import { EpicContainer } from "storyboard/epicContainer";

describe("EpicList component", () => {
  const anEpic = EpicBuilder.of().withContent("Lorem ipsum dolor.");

  const getChildren = <Props, State>(component: ShallowWrapper<Props, State>) =>
    component.prop("children");

  it("should have a .epic-container element", () => {
    const component = shallow(<EpicContainer />);

    const element = component.find(".epic-container");

    expect(element.exists()).is.true;
  });

  describe("should show epic content", () => {
    const anEpicContainer = (epics: Array<EpicBuilder>) => {
      return mount(
        <EpicContainer epics={epics.map(builder => builder.build())} />
      );
    };

    it("when there is only one epic", () => {
      const epics = [anEpic];
      const component = anEpicContainer(epics);

      const epicContentHasBeenShown = epics.every(epic =>
        component.someWhere(child => child.text() === epic.content)
      );

      expect(epicContentHasBeenShown).is.true;
    });

    it("when there are more than one epic", () => {
      const epics = [
        anEpic.withId("1").withContent("Lorem ipsum dolor."),
        anEpic.withId("2").withContent("Lorem ipsum dolor sit.")
      ];

      const component = anEpicContainer(epics);

      const epicContentHasBeenShown = epics.every(epic =>
        component.someWhere(child => child.text() === epic.content)
      );

      expect(epicContentHasBeenShown).is.true;
    });
  });
});
