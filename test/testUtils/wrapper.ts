import { ReactWrapper, ShallowWrapper } from "enzyme";

export type Wrapper<Props, State> =
  | ReactWrapper<Props, State>
  | ShallowWrapper<Props, State>;
