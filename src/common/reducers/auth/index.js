/**
 * @flow
 */

import { ACTION_STATUSES } from 'lib/core/actionStatuses';
import type { Action } from 'lib/core/flow';
import type { MinimalReducer } from 'common/types';

import AUTH_ACTION_TYPES from 'common/actions/auth/types';

export type AuthState = {
    log_out: MinimalReducer,
    login: {
        ...MinimalReducer
    },
    token: ?string
};

const initialState = (): AuthState => ({
  login: {
    error: null,
    status: null
  },
  log_out: {
    error: null,
    status: null
  },
  token: null
});

/* ************                         **************
   ************ Log In Reducers **************
   ************                         ************** */

const ATTEMPT_TO_LOGIN = (state: AuthState) => ({
  ...state,
  login: {
    ...state.login,
    status: ACTION_STATUSES.PENDING,
    error: null
  }
});

const SET_LOGIN_FAILED = (state: AuthState, action: Action) => ({
  ...state,
  login: {
    ...state.login,
    status: ACTION_STATUSES.FAILED,
    error: action.payload
  }
});

const SET_LOGIN_SUCCEED = (state: AuthState, action: Action) => ({
  ...state,
  login: {
    ...state.login,
    status: ACTION_STATUSES.SUCCEED,
    error: null
  },
  token: action.payload
});

/* ************                         **************
   ************ Log out Reducers **************
   ************                         ************** */

const ATTEMPT_TO_LOG_OUT = (state: AuthState) => ({
  ...state,
  log_out: {
    ...state.login,
    status: ACTION_STATUSES.PENDING
  }
});

const SET_LOGOUT_FAILED = (state: AuthState, action: Action) => ({
  ...state,
  log_out: {
    status: ACTION_STATUSES.FAILED,
    error: action.payload
  }
});

const SET_LOGOUT_SUCCEED = (state: AuthState) => ({
  ...state,
  log_out: {
    status: ACTION_STATUSES.SUCCEED,
    error: null
  }
});

const CLEAR_LOGIN_STATE = (state: AuthState) => ({
  ...state,
  login: { error: null, status: null, redirect_to: '/davincia' }
});

export default (state: AuthState = initialState(), action: Action) => {
  switch (action.type) {
    // login
    case AUTH_ACTION_TYPES.ATTEMPT_TO_LOG_IN:
      return ATTEMPT_TO_LOGIN(state);
    case AUTH_ACTION_TYPES.SET_LOGIN_ERROR:
      return SET_LOGIN_FAILED(state, action);
    case AUTH_ACTION_TYPES.SET_LOGIN_SUCCESS:
      return SET_LOGIN_SUCCEED(state, action);
    case AUTH_ACTION_TYPES.CLEAR_LOG_IN_STATE:
      return CLEAR_LOGIN_STATE(state);

    // log out
    case AUTH_ACTION_TYPES.ATTEMPT_TO_LOG_OUT:
      return ATTEMPT_TO_LOG_OUT(state);
    case AUTH_ACTION_TYPES.SET_LOG_OUT_ERROR:
      return SET_LOGOUT_FAILED(state, action);
    case AUTH_ACTION_TYPES.SET_LOG_OUT_SUCCESS:
      return SET_LOGOUT_SUCCEED(state);

    default:
      return state;
  }
};
