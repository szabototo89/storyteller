import * as React from "react";
import { use, expect, spy } from "chai";
import * as spies from "chai-spies";
import { mount, shallow, render, ShallowWrapper, ReactWrapper } from "enzyme";
import { equals } from "test/testUtils/enzymeHelpers";
import { EpicHeader } from "storyboard/epic/epicHeader";
import { eventHelper } from "test/testUtils/eventHelpers";

use(spies);

describe("EpicHeader component", () => {
  it("shows epic content", () => {
    const component = mount(<EpicHeader content="test content" />);

    expect(equals(component).textTo("test content")).is.true;
  });

  describe("onSelected event", () => {
    it("calls when .epic__header gets focus", () => {
      const handleSelected = spy();
      const component = mount(<EpicHeader onSelected={handleSelected} />);

      eventHelper(component.find(".epic__header")).focus();

      expect(handleSelected).is.called();
    });
  });
});
