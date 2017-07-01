import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ShallowWrapper } from "enzyme";

import { Dashboard } from "storyboard/dashboard";
import { Epic } from "storyboard/epic";
import { EpicContainer } from "storyboard/epicContainer";
import { Story } from "storyboard/story";

describe("Storyboard components", () => {
  const isPrimitiveComponent = (child: ShallowWrapper<any, any>) => {
    const actualType = child.type();
    return actualType.constructor === String;
  };

  it("should not refer to low level components", () => {
    const components = [
      <Dashboard />,
      <Epic />,
      <EpicContainer />,
      <Story />
    ].map(component => shallow(component));

    const containsPrimitive = components.some(component =>
      component.someWhere(isPrimitiveComponent)
    );

    expect(containsPrimitive).is.not.true;
  });
});
