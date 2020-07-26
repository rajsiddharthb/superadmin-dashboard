// @flow
import createSymbol from 'lib/core/createSymbol';

const createUserSymbol = createSymbol('USER');

export default {
  SET_USER: createUserSymbol('SET_USER'),
  SET_USER_PERMISSIONS: createUserSymbol('SET_USER_PERMISSIONS'),
  RESET_USER_STATE: createUserSymbol('RESET_USER_STATE')
};
