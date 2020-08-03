import React from 'react';
import { Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// loadable pages
const Dashboard = React.lazy(() => import('pages/Dashboard'));
const RaaList = React.lazy(() => import('pages/InternalUsers/Raa'));

export const history = createBrowserHistory();

// export
export default [

  { path: '/', name: 'Home', exact: true, component: () => <Redirect to="/d" /> },
  { path: '/d', name: 'Dashboard', exact: true, component: Dashboard },
  { path: '/raa', name: 'Raa', exact: true, component: () => <Redirect to="/raa/users" /> },
  { path: '/raa/users', name: 'R&A Team Members', exact: true, component: RaaList }
];
