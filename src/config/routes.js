import React from 'react';
import { createBrowserHistory } from 'history';

// loadable pages
const Dashboard = React.lazy(() => import('pages/Dashboard'));

export const history = createBrowserHistory();

// export
export default [
  { path: '/d', name: 'Dashboard', exact: true, component: Dashboard }
];
