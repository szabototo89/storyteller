import * as React from "react";
import { use, expect, spy } from "chai";
import * as spies from "chai-spies";
import { mount, shallow, render, ShallowWrapper, ReactWrapper } from "enzyme";

import { Story } from "models/story";
import { Epic } from "storyboard/epic";
import { Epic as EpicModel } from "models/epic";

use(spies);

describe("Epic component", () => {
  it("should be wrapped into a .epic element", () => {
    const component = mount(<Epic />);

    const element = component.find(".epic");

    expect(element.exists()).is.true;
  });

  it("should have a header element with .epic__header class", () => {
    const component = mount(<Epic />);

    const element = component.find(".epic__header");

    expect(element.exists()).is.true;
  });

  it("should have a body element with .epic__body class", () => {
    const component = mount(<Epic />);

    const element = component.find(".epic__body");

    expect(element.exists()).is.true;
  });

  it("should show header value", () => {
    const component = mount(<Epic content="test header" />);

    const containsHeader = component.someWhere(
      child => child.text() === "test header"
    );

    expect(containsHeader).is.true;
  });

  it(".epic__header should be focusable", () => {
    const component = mount(<Epic />);
    const header = component.find(".epic__header");

    expect(header.prop("tabIndex")).is.equal(-1);
  });

  describe("onSelected event", () => {
    const focusElement = (
      component: ReactWrapper<any, any>,
      selector: string
    ) => {
      const selectedComponent = component.find(selector);
      const isComponentFocusable = (component: typeof selectedComponent) => {
        return component.is("div") && component.prop("tabIndex") !== undefined;
      };

      if (!isComponentFocusable(selectedComponent)) {
        return;
      }

      return selectedComponent.simulate("focus");
    };

    it("is called when header gets focus", () => {
      const onSelected = spy();
      const component = mount(<Epic onSelected={onSelected} />);

      focusElement(component, ".epic__header");

      expect(onSelected).is.called();
    });
  });

  describe("should contain stories and render their values", () => {
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
