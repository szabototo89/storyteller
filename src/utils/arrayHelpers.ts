export const flatten = <Value, Result>(array: Array<Array<Value>>) => {
  return array.reduce(
    (previousValue, currentValue) => [...previousValue, ...currentValue],
    []
  );
};
