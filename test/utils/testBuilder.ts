import { WeakType } from "test/utils/weakType";

export const isRequired = <Value>(
  value: Value | undefined,
  { defaultValue }: { defaultValue?: Value } = {}
) => {
  if (value === undefined) {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error("Missing value");
  }

  return value;
};

export type TestBuilder<Value> = {
  build(): Value;
};

export const build = <Value>(builders: Array<TestBuilder<Value>>): Array<Value> => {
  return builders.map(builder => builder.build());
};