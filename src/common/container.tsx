import * as React from "react";
import { ReactElement } from "react";

type Properties = {
  children?: any;
};

export const Container = ({ children, ...rest }: any) => {
  return (
    <div {...rest}>
      {children}
    </div>
  );
};
