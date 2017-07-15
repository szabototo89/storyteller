import * as React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";

import { Story } from "storyboard/story";
import { equalsText } from "test/testUtils/enzymeHelpers";

describe("Story component", () => {
  it("should have a .story element", () => {
    const component = shallow(<Story />);

    const element = component.find(".story");

    expect(element.exists()).is.true;
  });

  it("should get story content and show it", () => {
    const component = mount(<Story content={"Hello World"} />);

    const storyShowsContent = equalsText(component)("Hello World");

    expect(storyShowsContent).to.be.true;
  });
});
