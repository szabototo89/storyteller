import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ShallowWrapper } from "enzyme";

import { EpicContainer } from "../../src/storyboard/epicContainer";

describe("EpicList component", () => {
  const getChildren = <Props, State>(component: ShallowWrapper<Props, State>) => component.prop("children");

  it("should have a .epic-container element", () => {
    const component = shallow(<EpicContainer />);

    const element = component.find(".epic-container");

    expect(element.exists()).is.true;
  });

  it("should get epics and render them as its children", () => {
    const component = shallow(<EpicContainer epics={[1]} />);

    const children = getChildren(component);

    expect(children).to.have.length(1);
  });
});
