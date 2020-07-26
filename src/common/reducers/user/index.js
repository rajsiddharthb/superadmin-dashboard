/**
 * @flow
 */

import type { Action } from 'lib/core/flow';
import USER_ACTION_TYPES from '../../actions/user/types';

const makeDateValue = (data) => data ? new Date(data) : null;

export type UserState = {
    user?: ?Object
};

const initialState = (): UserState => ({
  user: null
});

/* ************                         **************
   ************ SET Reducers **************
   ************                         ************** */

const SET_USER = (state: UserState, action: Action) => ({
  ...state,
  user: {
    ...action.payload,
    dob: makeDateValue(action.payload.dob)
  }
});

const SET_USER_PERMISSIONS = (state: UserState, action: Action) => ({
  ...state,
  permissions: action.payload
});

const RESET_INITIAL_STATE = () => ({
  ...initialState()
});

export default (state: UserState = initialState(), action: Action) => {
  switch (action.type) {
    // setters
    case USER_ACTION_TYPES.SET_USER_PERMISSIONS:
      return SET_USER_PERMISSIONS(state, action);
    case USER_ACTION_TYPES.SET_USER:
      return SET_USER(state, action);
    case USER_ACTION_TYPES.RESET_USER_STATE:
      return RESET_INITIAL_STATE();

    default:
      return state;
  }
};
