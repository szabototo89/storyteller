import { WeakType } from "test/utils/weakType";

export type TestBuilder<Value> = {
  build(): Value;
};

// export class ObjectTestBuilder<Value extends Object> implements TestBuilder<Value> {
//   protected constructor(protected readonly value?: Value) {}

//   private copy(value: WeakType<Value>) {
//     const newValue: Value = {
//       ...(this.value as Object),
//       ...(value as any)
//     };

//     return new ObjectTestBuilder(null);
//   }

//   build(): Value {
//     return this.value;
//   }
// }