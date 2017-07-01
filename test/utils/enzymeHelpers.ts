import { ReactWrapper } from "enzyme";

export const findText = <Props, State>(
  component: ReactWrapper<Props, State>
) => (value: string) => component.findWhere(child => child.text() === value);

export const equalsText = <Props, State>(component: ReactWrapper<Props, State>) => (value: string) => findText(component)(value).length > 0
