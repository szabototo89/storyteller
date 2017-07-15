import { ReactWrapper } from "enzyme";

export const eventHelper = (selectedComponent: ReactWrapper<any, any>) => ({
  focus() {
    const isComponentFocusable = (component: typeof selectedComponent) => {
      return component.is("div") && component.prop("tabIndex") !== undefined;
    };

    if (!isComponentFocusable(selectedComponent)) {
      return;
    }

    return selectedComponent.simulate("focus");
  }
});
