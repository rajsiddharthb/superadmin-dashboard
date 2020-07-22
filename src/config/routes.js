import React from 'react';
import { createBrowserHistory } from 'history';

// loadable pages

const Dashboard = React.lazy(() => import('pages/Dashboard'));

export const history = createBrowserHistory();

// export
export default [
  { path: '/', name: 'Dashboard', exact: true, page: Dashboard }
];
