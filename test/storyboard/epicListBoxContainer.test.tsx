import * as React from "react";
import { expect, spy, use } from "chai";
import * as spies from "chai-spies";
import { render, mount, shallow, ShallowWrapper, ReactWrapper } from "enzyme";

import { epicListBoxContainer } from "storyboard/epicListBoxContainer";
import { EpicListBox } from "storyboard/epicListBox";
import { anEpic } from "test/testBuilders/epicBuilder";
import { Wrapper } from "test/testUtils/wrapper";

use(spies);

describe("epicListBoxContainer behaviour", () => {
  const DummyComponent = (properties: any) => null;
  const EpicListBoxContainer = epicListBoxContainer(DummyComponent);

  describe("has basic invariants", () => {
    it("renders only the wrapped component", () => {
      const component = shallow(<EpicListBoxContainer />);

      const containsDummyComponent = component.matchesElement(
        <DummyComponent />
      );

      expect(containsDummyComponent).is.true;
    });

    it("passes every properties to the wrapped component", () => {
      const properties = {
        foo: true,
        it: "should get this"
      };
      const component = shallow(<EpicListBoxContainer {...properties} />);

      const containsDummyComponent = component.matchesElement(
        <DummyComponent {...properties} />
      );

      expect(containsDummyComponent).is.true;
    });
  });

  describe("with EpicListBox", () => {
    const getEpicListBox = (component: Wrapper<any, any>) =>
      component.find(EpicListBox);

    it("selects that epic which got sent back by onEpicSelected event", () => {
      const EpicListBoxContainer = epicListBoxContainer(EpicListBox);
      const component = shallow(<EpicListBoxContainer />);
      const epicListBox = getEpicListBox(component);
      const aTestEpic = anEpic()
        .withId("1")
        .withContent("test content")
        .build();

      epicListBox.simulate("epicSelected", aTestEpic);

      expect(getEpicListBox(component).prop("selectedEpic")).to.be.deep.equal(
        anEpic().withId("1").withContent("test content").build() 
      );
    });
  });
});
