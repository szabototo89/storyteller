import * as React from 'react';
import {ReactElement} from "react";

const getContainers = (children: Array<ReactElement<any>> = []) => {
  const isComponentContainer = (child: ReactElement<any>) => child.type === Container;
  const isSubComponent = (child: ReactElement<{ isSubComponent: boolean }>) => child.props && child.props.isSubComponent;

  return children.filter(child => isComponentContainer(child) && isSubComponent(child));
};

const Container = ({ name, modifier, children }: any) => {
  const nameWithModifier = !!modifier ? `${name}--${modifier}` : '';

  return <div className={`${name} ${nameWithModifier}`}>
    {children}
  </div>
};

export default Container;