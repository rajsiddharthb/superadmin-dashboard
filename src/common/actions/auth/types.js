// @flow
import createSymbol from 'lib/core/createSymbol';

const createAuthSymbol = createSymbol('AUTH');

export default {
  ATTEMPT_TO_LOG_IN: createAuthSymbol('ATTEMPT_TO_LOG_IN'),
  SET_LOGIN_ERROR: createAuthSymbol('SET_LOGIN_ERROR'),
  SET_LOGIN_SUCCESS: createAuthSymbol('SET_LOGIN_SUCCESS'),

  SET_LOGIN_TO_PARAM: createAuthSymbol('SET_LOGIN_TO_PARAM'),
  SET_FETCHED_USER: createAuthSymbol('SET_FETCHED_USER'),

  ATTEMPT_TO_LOG_OUT: createAuthSymbol('ATTEMPT_TO_LOG_OUT'),
  SET_LOG_OUT_SUCCESS: createAuthSymbol('SET_LOG_OUT_SUCCESS'),
  SET_LOG_OUT_ERROR: createAuthSymbol('SET_LOG_OUT_ERROR'),

  CLEAR_LOG_IN_STATE: createAuthSymbol('CLEAR_LOG_IN_STATE'),
  CLEAR_AUTH_STATE: createAuthSymbol('CLEAR_AUTH_STATE')
};
