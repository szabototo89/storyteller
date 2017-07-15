import * as React from "react";
import { use, expect, spy } from "chai";
import * as spies from "chai-spies";
import { mount, shallow, render, ShallowWrapper, ReactWrapper } from "enzyme";

import { Story } from "models/story";
import { Epic } from "storyboard/epic";
import { Epic as EpicModel } from "models/epic";
import { eventHelper } from "test/testUtils/eventHelpers";

use(spies);

describe("Epic component", () => {
  it("is wrapped into a .epic element", () => {
    const component = mount(<Epic />);

    const element = component.find(".epic");

    expect(element.exists()).is.true;
  });

  it("has a header element with .epic__header class", () => {
    const component = mount(<Epic />);

    const element = component.find(".epic__header");

    expect(element.exists()).is.true;
  });

  it("has a body element with .epic__body class", () => {
    const component = mount(<Epic />);

    const element = component.find(".epic__body");

    expect(element.exists()).is.true;
  });

  it("shows header value", () => {
    const component = mount(<Epic content="test header" />);

    const containsHeader = component.someWhere(
      child => child.text() === "test header"
    );

    expect(containsHeader).is.true;
  });

  it(".epic__header is focusable", () => {
    const component = mount(<Epic />);
    const header = component.find(".epic__header");

    expect(header.prop("tabIndex")).is.equal(-1);
  });

  describe("onSelected event", () => {
    it("is called when header gets focus", () => {
      const onSelected = spy();
      const component = mount(<Epic onSelected={onSelected} />);

      eventHelper(component.find('.epic__header')).focus();

      expect(onSelected).is.called();
    });
  });

  describe("contains stories and render their values", () => {
    const anEpicComponentWith = (stories: Array<Story>) =>
      mount(<Epic stories={stories} />);

    const expectEveryStoryHasBeenShown = (
      component: ReactWrapper<any, any>,
      stories: Array<Story>
    ) => {
      const everyStoryHasBeenShown = stories.every(story =>
        component.someWhere(child => child.text() === story.content)
      );

      return expect(everyStoryHasBeenShown);
    };

    it("when there is no story", () => {
      const stories: Array<Story> = [];
      const component = anEpicComponentWith(stories);

      expectEveryStoryHasBeenShown(component, stories).is.true;
    });

    it("when there are one or more stories", () => {
      const stories: Array<Story> = [
        {
          id: "1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illo aperiam! Ipsum, dicta vero quaerat facilis voluptate perferendis, suscipit consectetur, esse ratione aliquam voluptatem cupiditate, quos ducimus praesentium rerum id.",
          tasks: []
        }
      ];

      const component = anEpicComponentWith(stories);

      expectEveryStoryHasBeenShown(component, stories).is.true;
    });
  });
});
