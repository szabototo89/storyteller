import * as React from "react";
import { expect } from "chai";
import { render, mount, shallow, ShallowWrapper, ReactWrapper } from "enzyme";

import { EpicContainer } from "storyboard/epicContainer";

import { EpicBuilder, anEpic } from "test/builders/epicBuilder";
import { findText, equalsText } from "test/utils/enzymeHelpers";

describe("EpicList component", () => {
  it("should have a .epic-container element", () => {
    const component = shallow(<EpicContainer />);

    const element = component.find(".epic-container");

    expect(element.exists()).to.be.true;
  });

  describe("should show epic content", () => {
    const anEpicContainer = (epics: Array<EpicBuilder>) => {
      return mount(
        <EpicContainer epics={epics.map(builder => builder.build())} />
      );
    };

    it("when there is only one epic", () => {
      const epics = [anEpic().withContent("Lorem ipsum dolor.")];
      const component = anEpicContainer(epics);

      const epicContentHasBeenShown = epics
        .map(epic => epic.getContent())
        .every(equalsText(component));

      expect(epicContentHasBeenShown).to.be.true;
    });

    it("when there are more than one epic", () => {
      const epics = [
        anEpic().withId("1").withContent("Lorem ipsum dolor."),
        anEpic().withId("2").withContent("Lorem ipsum dolor sit.")
      ];

      const component = anEpicContainer(epics);

      const epicContentHasBeenShown = epics
        .map(epic => epic.getContent())
        .every(equalsText(component));

      expect(epicContentHasBeenShown).to.be.true;
    });
  });

  it("gets epics as optional", () => {
    const passingUndefinedEpics = () => <EpicContainer epics={undefined} />;

    expect(passingUndefinedEpics).to.not.throw();
  });
});
