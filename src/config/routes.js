import React from 'react';
import { createBrowserHistory } from 'history';

// loadable pages
const Dashboard = React.lazy(() => import('pages/Dashboard'));

export const history = createBrowserHistory();

// export
export default [
  { path: '/', name: 'Admin', exact: true },
  { path: '/dashboard', name: 'Dashboard', exact: true, component: Dashboard }
];
