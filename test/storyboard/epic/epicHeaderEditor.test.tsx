import * as React from "react";
import { use, expect, spy } from "chai";
import * as spies from "chai-spies";
import { mount, shallow, render, ShallowWrapper, ReactWrapper } from "enzyme";
import { EpicHeaderEditor } from "storyboard/epic/epicHeaderEditor";

use(spies);

type ReactOrShallowWrapper<A, B> = ReactWrapper<A, B> | ShallowWrapper<A, B>;

describe("EpicHeaderEditor component", () => {
  const getTextBox = (component: ReactOrShallowWrapper<any, any>) =>
    component.find(".epic-header-editor__input");

  it("has a textbox editor", () => {
    const component = mount(<EpicHeaderEditor />);

    const textBoxEditor = getTextBox(component);

    expect(textBoxEditor.exists()).is.true;
  });

  it("has .epic-header-editor html element", () => {
    const component = mount(<EpicHeaderEditor />);

    const htmlElement = component.find(".epic-header-editor");

    expect(htmlElement.exists()).is.true;
  });

  it("has content property and textbox is populated with its value", () => {
    const component = mount(<EpicHeaderEditor content={"test content"} />);
    const textBoxEditor = getTextBox(component);

    const textBoxEditorValue = textBoxEditor.props().value;

    expect(textBoxEditorValue).equals("test content");
  });

  describe("onValueChanged event", () => {
    it("calls when user types value into the textbox", () => {
      const onValueChanged = spy();
      const component = shallow(
        <EpicHeaderEditor onValueChanged={onValueChanged} />
      );
      const textBox = getTextBox(component);

      textBox.simulate("change", "newValue");

      expect(onValueChanged).is.called.once;
    });
  });
});
