import React from 'react';
import { Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const RaaList = React.lazy(() => import('pages/InternalUsers/Raa'));
const Dashboard = React.lazy(() => import('pages/Dashboard'));

// loadable pages

export const history = createBrowserHistory();

// export
export default [
  { path: '/', name: 'Home', exact: true, component: () => <Redirect to="/d" /> },
  { path: '/dashboard', name: 'Dashboard', exact: true, component: Dashboard },
  { path: '/raa', name: 'Raa', exact: true, component: () => <Redirect to="/raa/users" /> },
  { path: '/raa/users', name: 'R&A Team Members', exact: true, component: RaaList }
];
