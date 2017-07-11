export type WeakType<Type> = {
  [propertyName in keyof Type]?: Type[propertyName];
}