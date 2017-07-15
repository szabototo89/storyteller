import * as React from "react";
import { ReactElement } from "react";

export const Container = ({ children, isFocusable = false, ...rest }: any) => {
  const getFocusableProperties = (isFocusable: boolean) => {
    if (!isFocusable) return {};
    return { tabIndex: -1 };
  };

  const containerProperties = {
    ...getFocusableProperties(isFocusable)
  };

  return (
    <div {...containerProperties} {...rest}>
      {children}
    </div>
  );
};
