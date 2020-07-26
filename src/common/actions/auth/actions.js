/**
 * @flow
 */

import type { Action } from 'lib/core/flow';

import AUTH_ACTION_TYPES from './types';

/* ************                         **************
   ************ Log In Action Creators **************
   ************                         ************** */

/**
 * attemptToLogin
 * action creator
 * @param {string} username -
 * @param {string} password -
 * @returns {Action} - action
 */
export const attemptToLogin = ({ email, password }): Action => ({
  type: AUTH_ACTION_TYPES.ATTEMPT_TO_LOG_IN,
  payload: { email, password }
});

export const setLoginError = (error: string): Action => ({
  type: AUTH_ACTION_TYPES.SET_LOGIN_ERROR,
  payload: error
});

export const setLoginSuccess = (token: string): Action => ({
  type: AUTH_ACTION_TYPES.SET_LOGIN_SUCCESS,
  payload: token
});

/* ************                         **************
   ************ Log Out Action Creators **************
   ************                         ************** */

export const attemptToLogout = (from: string): Action => ({
  type: AUTH_ACTION_TYPES.ATTEMPT_TO_LOG_OUT,
  payload: from
});

export const setLogoutError = (error: string): Action => ({
  type: AUTH_ACTION_TYPES.SET_LOG_OUT_ERROR,
  payload: error
});

export const setLogoutSuccess = (): Action => ({
  type: AUTH_ACTION_TYPES.SET_LOG_OUT_SUCCESS
});

export const clearLogInState = (): Action => ({
  type: AUTH_ACTION_TYPES.CLEAR_LOG_IN_STATE
});

export const clearAuthState = (): Action => ({
  type: AUTH_ACTION_TYPES.CLEAR_AUTH_STATE
});
