// @flow

import USER_ACTION_TYPES from './types';

export const setUser = (user: Object) => ({
  type: USER_ACTION_TYPES.SET_USER,
  payload: user
});

export const resetUserState = () => ({
  type: USER_ACTION_TYPES.RESET_USER_STATE
});
