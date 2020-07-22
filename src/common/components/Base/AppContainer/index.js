// @flow
import React, { type Children, type Node } from 'react';

type Props = {
    className?: string,
    children: Children
}

const AppContainer = ({ className = 'App', children }: Props): Node => (
  <div className={className || ''}>
    {children}
  </div>
);

AppContainer.displayName = 'ApplicationContainer';

export default AppContainer;
