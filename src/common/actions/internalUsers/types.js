// @flow
import createSymbol from 'lib/core/createSymbol';

const createUserSymbol = createSymbol('INTERNAL_USERS');

export default {
  FETCH_RAA_LIST: createUserSymbol('FETCH_RAA_LIST'),
  SET_FETCH_RAA_LIST_FAILURE: createUserSymbol('SET_FETCH_RAA_LIST_FAILURE'),
  SET_FETCH_RAA_LIST_SUCCESS: createUserSymbol('SET_FETCH_RAA_LIST_SUCCESS')
};
