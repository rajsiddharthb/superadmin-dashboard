/* eslint-disable camelcase */
/**
 * @flow
 */

import { createSelector } from 'reselect';
import type { AuthState } from '../reducers/auth';

/**
 * get auth State State
 * @param {Object} state - state
 * @returns {AuthState} - auth
 */
const getAuthState = (state) => state.auth;

export const loginSelector: Function = createSelector(
  getAuthState,
  (auth: AuthState) => auth.login
);

export const logOutStatusSelector: Function = createSelector(
  getAuthState,
  (auth: AuthState) => auth.log_out.status
);

export const signUptSelector: Function = createSelector(
  getAuthState,
  (auth: AuthState) => auth.sign_up
);

export const authTokenSelector: Function = createSelector(
  getAuthState,
  (auth: AuthState) => auth.token
);
