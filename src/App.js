import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import AppContainer from 'common/components/Base/AppContainer';
import AppLayout from 'common/components/Base/AppLayout';
import Loader from 'common/components/Loader';
import { history } from 'config/routes';
import { ToastProvider, DefaultToastContainer, useToasts } from 'react-toast-notifications';

import { initApplication } from 'common/actions/app/actions';

import TOAST from 'lib/toastManager';
import 'scss/main.scss';

const Login = React.lazy(() => import('pages/login'));
const Page404 = React.lazy(() => import('pages/page404'));

const loading = (
  <div
    className="pt-3 text-center"
    style={{
      height: '100%'
    }}
  >
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const CustomToastContainer = props => <DefaultToastContainer {...props} style={{ zIndex: 9999 }} />;
const ToastWrapper = ({ children }) => {
  const { addToast } = useToasts();

  useEffect(() => {
    TOAST.setToastManager(addToast);
  }, [addToast]);

  return children;
};

function App({ initApp }) {
  const dispatch = useDispatch();
  const state = useSelector(st => st.application);

  const initialize = useCallback(() => {
    dispatch(initApplication());
  }, [dispatch]);

  useEffect(initialize, [initApp]);

  return (
    <ToastProvider components={{ ToastContainer: CustomToastContainer }} placement="top-right">
      <ToastWrapper>
        <React.StrictMode>
          <AppContainer>
            {state.isReady ? (
              <Router history={history}>
                <React.Suspense fallback={loading}>
                  <Switch>
                    <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                    <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                    <Route path="/" name="Home" component={AppLayout} />
                    {state.isLoggedIn === false && <Redirect to="/login" />}
                  </Switch>
                </React.Suspense>
              </Router>
            ) : <Loader size={70} />}
          </AppContainer>
        </React.StrictMode>
      </ToastWrapper>
    </ToastProvider>
  );
}

export default App;
