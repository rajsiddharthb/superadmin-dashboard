// @flow
import createSymbol from 'lib/core/createSymbol';

const createAppSymbol = createSymbol('APP');

export default {
  INIT_APPLICATION: createAppSymbol('INIT_APPLICATION'),
  SET_APPLICATION_IS_READY: createAppSymbol('SET_APPLICATION_IS_READY'),
  CLEAR_APP_STATE: createAppSymbol('CLEAR_AUTH_STATE')
};
