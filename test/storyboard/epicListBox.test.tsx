import * as React from "react";
import { expect, spy, use } from "chai";
import * as spies from "chai-spies";
import { render, mount, shallow, ShallowWrapper, ReactWrapper } from "enzyme";

import { EpicListBox } from "storyboard/epicListBox";

import { EpicBuilder, anEpic } from "test/testBuilders/epicBuilder";
import { findText, equalsText } from "test/testUtils/enzymeHelpers";
import { build } from "test/testUtils/testBuilder";
import { Wrapper } from "test/testUtils/wrapper";
import { Epic } from "models/epic";

use(spies);

describe("EpicListBox component", () => {
  it("should have a .epic-list-box element", () => {
    const component = shallow(<EpicListBox />);

    const element = component.find(".epic-list-box");

    expect(element.exists()).to.be.true;
  });

  describe("should show epic content", () => {
    const anEpicListBox = (epics: Array<EpicBuilder>) => {
      return mount(
        <EpicListBox epics={epics.map(builder => builder.build())} />
      );
    };

    it("when there is only one epic", () => {
      const epics = [anEpic().withContent("Lorem ipsum dolor.")];
      const component = anEpicListBox(epics);

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

      const component = anEpicListBox(epics);

      const epicContentHasBeenShown = epics
        .map(epic => epic.getContent())
        .every(equalsText(component));

      expect(epicContentHasBeenShown).to.be.true;
    });
  });

  it("gets epics as optional", () => {
    const passingUndefinedEpics = () => <EpicListBox epics={undefined} />;

    expect(passingUndefinedEpics).to.not.throw();
  });

  describe("onEpicSelected event", () => {
    const epics = build([
      anEpic().withId("1").withContent("test content 1"),
      anEpic().withId("2").withContent("test content 2"),
      anEpic().withId("3").withContent("test content 3")
    ]);

    const getFirstEpicComponent = (component: Wrapper<any, any>) =>
      component.find("Epic").first();

    it("has been called when an epic has been selected", () => {
      const onEpicSelected = spy();
      const component = shallow(
        <EpicListBox epics={epics} onEpicSelected={onEpicSelected} />
      );
      const anEpicComponent = getFirstEpicComponent(component);

      anEpicComponent.simulate("selected");

      expect(onEpicSelected).is.called();
    });

    it("gets selected epic when selection has happened", () => {
      const onEpicSelected = spy();
      const component = shallow(
        <EpicListBox epics={epics} onEpicSelected={onEpicSelected} />
      );
      const anEpicComponent = getFirstEpicComponent(component);

      anEpicComponent.simulate("selected");

      expect(onEpicSelected).is.called.with(
        anEpic().withId("1").withContent("test content 1").build()
      );
    });
  });
});
