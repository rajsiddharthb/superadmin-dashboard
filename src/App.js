import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import AppContainer from 'common/components/Base/AppContainer';
import AppLayout from 'common/components/Base/AppLayout';
import { history } from 'config/routes';
import { createGeneralStore } from 'stores';

import 'scss/main.scss';

const Login = React.lazy(() => import('pages/login'));
const Page404 = React.lazy(() => import('pages/page404'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

function App() {
  return (
    <Provider store={createGeneralStore()}>
      <AppContainer>
        <Router history={history}>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route path="/" name="Home" render={props => <AppLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </AppContainer>
    </Provider>
  );
}

export default App;
