import { TestBuilder } from "test/utils/testBuilder";

export const build = <Value>(builders: Array<TestBuilder<Value>>): Array<Value> => {
  return builders.map(builder => builder.build());
};