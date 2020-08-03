/* eslint no-use-before-define: 2 */ // --> OFF
import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { CFade } from '@coreui/react';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

export default ({ routes }) => (
  <Switch>
    <Suspense fallback={loading}>
      {routes.map((route) => route.component && (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => (
            <CFade>
              <route.component {...props} />
            </CFade>
          )}
        />
      ))}
    </Suspense>
    <Redirect from="/" to="/d" />
  </Switch>
);
