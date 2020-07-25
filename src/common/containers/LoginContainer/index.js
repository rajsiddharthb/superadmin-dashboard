import React, { useState, useCallback, useEffect } from 'react';
import { history } from 'config/routes';
import classnames from 'classnames';

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
import { passwordValidator, emailValidator } from 'lib/helpers/validators';

import InfoCard from './InfoCard';

import './styles.scss';

const LoginContainer = () => {
  const [email, setEmail] = useState({ value: '', hasError: false, isInitial: true });
  const [password, setPassword] = useState({ value: '', hasError: false, isInitial: true });
  const [canLogin, setCanLogin] = useState(false);
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
      history.push('/dashboard');
    }
  }, [canLogin]);

  return (
    <CContainer className="login-container">
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
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      name="pass"
                      onChange={onPasswordChange}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      <CButton
                        color={canLogin ? 'primary' : 'secondary'}
                        className="px-4"
                        disabled={!canLogin}
                        onClick={onLogin}
                      >
                        Login
                      </CButton>
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
