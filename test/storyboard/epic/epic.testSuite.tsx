import * as React from "react";
import { use, expect, spy } from "chai";
import * as spies from "chai-spies";
import { mount, shallow, render, ShallowWrapper, ReactWrapper } from "enzyme";

import { Story } from "models/story";
import { Epic as EpicModel } from "models/epic";
import { Epic } from "storyboard/epic";

import { eventHelper } from "test/testUtils/eventHelpers";
import { Wrapper } from "test/testUtils/wrapper";

export const epicTestSuite = (Epic: any, componentName: string = Epic.name ||
    Epic.constructor.name) => {
  use(spies);
  describe(`[Epic Test Suite] ${componentName} component`, () => {
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

    describe("when isEdited is true", () => {
      const element = <Epic isEdited={true} />;
      const component = mount(element);

      function hasValuePassed<Value>(
        component: Wrapper<any, any>,
        value: Value
      ) {
        const properties = component.props();

        return Object.keys(properties).some(
          propertyName => properties[propertyName] === value
        );
      }

      it("shows .epic-header-editor", () => {
        const isEpicHeaderShown = component
          .find(".epic-header-editor")
          .exists();

        expect(isEpicHeaderShown).is.true;
      });

      it("epic header is disappeared", () => {
        const isEpicHeaderShown = component.find("EpicHeader").exists();

        expect(isEpicHeaderShown).is.false;
      });

      it("content is passed to the epic header editor", () => {
        const component = mount(
          <Epic isEdited={true} content={"test content"} />
        );
        const epicHeader = component.find("EpicHeaderEditor");
        const containsContent = hasValuePassed(epicHeader, "test content");

        expect(containsContent).is.true;
      });
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

        eventHelper(component.find(".epic__header")).focus();

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
};
