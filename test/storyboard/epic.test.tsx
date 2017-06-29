import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ShallowWrapper, ReactWrapper } from "enzyme";

import { Story } from "../../src/models/story";
import { Epic } from "../../src/storyboard/epic";

describe("Epic component", () => {
  const getChildren = <Props, State>(component: ShallowWrapper<Props, State>) =>
    component.prop("children");

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

  describe("should contain stories and render their values", () => {
    const anEpicWith = (stories: Array<Story>) =>
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
      const component = anEpicWith(stories);

      expectEveryStoryHasBeenShown(component, stories).is.true;
    });

    it("when there are one or more stories", () => {
      const stories = [
        {
          id: "1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illo aperiam! Ipsum, dicta vero quaerat facilis voluptate perferendis, suscipit consectetur, esse ratione aliquam voluptatem cupiditate, quos ducimus praesentium rerum id."
        }
      ];

      const component = anEpicWith(stories);

      expectEveryStoryHasBeenShown(component, stories).is.true;
    });
  });
});
