// @flow
import createSymbol from 'lib/core/createSymbol';

const createUserSymbol = createSymbol('USERS');

export default {
  FETCH_USERS_LIST: createUserSymbol('FETCH_USERS_LIST'),
  SET_FETCH_FETCH_USERS_LIST_SUCCESS: createUserSymbol('SET_FETCH_FETCH_USERS_LIST_SUCCESS'),
  SET_FETCH_FETCH_USERS_LIST_FAILURE: createUserSymbol('SET_FETCH_FETCH_USERS_LIST_FAILURE'),

  CLEAR_USERS_STATE: createUserSymbol('CLEAR_USERS_STATE')
};
