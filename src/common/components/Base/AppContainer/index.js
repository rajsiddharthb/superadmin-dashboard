// @flow
import React, { type Children, type Node } from 'react';

type Props = {
    className?: string,
    children: Children
}

const AppContainer = ({ className = 'App', children }: Props): Node => (
  <div
    className={className || ''}
    style={{
      width: '100%',
      height: '100%'
    }}
  >
    {children}
  </div>
);

AppContainer.displayName = 'ApplicationContainer';

export default AppContainer;
