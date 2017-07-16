import * as React from "react";
import { use, expect, spy } from "chai";
import * as spies from "chai-spies";
import { mount, shallow, render, ShallowWrapper, ReactWrapper } from "enzyme";
import { epicContainer } from "storyboard/epic/epicContainer";
import { Epic } from "storyboard/epic";
import { Wrapper } from "test/testUtils/wrapper";
import { epicTestSuite } from "test/storyboard/epic/epic.testSuite";

use(spies);

describe("epicContainer behaviour", () => {
  const EpicContainer = epicContainer(Epic);
  const getEpicComponent = (component: Wrapper<any, any>) =>
    component.find(Epic);

  describe("passes isEdited property to Epic component", () => {
    it("when isEdited is false", () => {
      const component = shallow(<EpicContainer isEdited={false} />);

      const epicComponent = getEpicComponent(component);

      expect(epicComponent.prop("isEdited")).is.false;
    });

    it("when isEdited is true", () => {
      const component = shallow(<EpicContainer isEdited={true} />);

      const epicComponent = getEpicComponent(component);

      expect(epicComponent.prop("isEdited")).is.true;
    });
  });

  it("should set isEdited to true when onSelected event is called on EpicHeader", () => {
    const component = shallow(<EpicContainer isEdited={false} />);

    component.simulate("selected");

    const isEdited = getEpicComponent(component).prop("isEdited");
    expect(isEdited).is.true;
  });

  describe("generates an", () => {
    epicTestSuite(EpicContainer);
  });
});
