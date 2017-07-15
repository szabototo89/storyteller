import * as React from "react";
import { expect } from "chai";
import { mount, shallow, ShallowWrapper } from "enzyme";

import { Dashboard } from "storyboard/dashboard";
import { Epic } from "storyboard/epic";
import { EpicListBox } from "storyboard/epicListBox";
import { Story } from "storyboard/story";
import { Task } from "storyboard/task";
import { TaskContainer } from "storyboard/taskContainer";
import { TaskGroup } from "storyboard/taskGroup";
import { TaskGroupContainer } from "storyboard/taskGroupContainer";
import { EpicHeader } from "storyboard/epic/epicHeader";
import { EpicHeaderEditor } from "storyboard/epic/epicHeaderEditor";

describe("Storyboard components", () => {
  const isPrimitiveComponent = (child: ShallowWrapper<any, any>) => {
    const actualType = child.type();
    return actualType.constructor === String;
  };

  it("should not refer to low level components", () => {
    const components = [
      <Dashboard />,
      <Epic />,
      <EpicHeader />,
      <EpicHeaderEditor />,
      <EpicListBox />,
      <Story />,
      <Task />,
      <TaskContainer />,
      <TaskGroup />,
      <TaskGroupContainer />
    ].map(component => shallow(component));

    const containsPrimitive = components.some(component =>
      component.someWhere(isPrimitiveComponent)
    );
    expect(containsPrimitive).is.not.true;
  });
});
