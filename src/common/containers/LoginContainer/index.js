import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { loginSelector } from 'common/selectors/authSelectors';
import config from 'config';

import { attemptToLogin, clearLogInState } from 'common/actions/auth/actions';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import TOAST from 'lib/toastManager';
import { passwordValidator, emailValidator } from 'lib/helpers/validators';

import InfoCard from './InfoCard';
import './styles.scss';
import actionStatuses from '../../../lib/core/actionStatuses';

const passDefaultState = { value: '', hasError: false, isInitial: true };
const emailDefaultState = { value: '', hasError: false, isInitial: true };

const LoginContainer = () => {
  const [email, setEmail] = useState(passDefaultState);
  const [password, setPassword] = useState(emailDefaultState);
  const [canLogin, setCanLogin] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(loginSelector);

  const validateCanLogin = useCallback(() => {
    if (!password.hasError && !email.hasError && !password.isInitial && !email.isInitial) {
      setCanLogin(true);
    } else {
      setCanLogin(false);
    }
  }, [password, email]);

  useEffect(validateCanLogin, [email, password]);

  const onPasswordChange = useCallback((e) => {
    e.stopPropagation();
    const pass = e.target.value;
    if (pass && passwordValidator(pass)) {
      return setPassword({ value: pass, hasError: false, isInitial: false });
    }

    return setPassword({ value: pass, hasError: true, isInitial: false });
  }, [setPassword]);

  const onEmailChange = useCallback((e) => {
    e.stopPropagation();
    const mail = e.target.value;
    if (mail && emailValidator(mail)) {
      return setEmail({ value: mail, hasError: false, isInitial: false });
    }

    return setEmail({ value: mail, hasError: true, isInitial: false });
  }, [setEmail]);

  const onLogin = useCallback(() => {
    if (canLogin) {
      dispatch(attemptToLogin({ email: email.value, password: password.value }));
    }
  }, [canLogin, dispatch, email, password]);

  const showMessage = useCallback(() => {
    if (actionStatuses.isActionStatusFailed(state.status)) {
      TOAST.error(state.error, { autoDismissTimeout: 7000 });
      setPassword(passDefaultState);
      setEmail(emailDefaultState);
    }
  }, [state]);

  useEffect(showMessage, [state]);

  useEffect(() => () => {
    dispatch(clearLogInState());
  }, [dispatch]);

  const redirect = () => {
    window.location.href = `${config.app_urls.superAdminDashboard}/dashboard`;
  };

  return (
    <CContainer className="login-container">
      {actionStatuses.isActionStatusSucceed(state.status) && redirect()}
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      className={classnames({
                        invalid: email.hasError,
                        valid: !email.isInitial && !email.hasError
                      })}
                      value={email.value}
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={onEmailChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      className={classnames({
                        invalid: password.hasError,
                        valid: !password.isInitial && !password.hasError
                      })}
                      value={password.value}
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      name="pass"
                      onChange={onPasswordChange}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      {actionStatuses.isActionStatusPending(state.status) ? (
                        <button className="btn btn-primary" type="button" disabled>
                          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
                          {'   '} Wait...
                        </button>
                      ) : (
                        <CButton
                          color={canLogin ? 'primary' : 'secondary'}
                          className="px-4"
                          disabled={!canLogin}
                          onClick={onLogin}
                        >Login
                        </CButton>
                      )}
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <InfoCard />
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default LoginContainer;
