/**
 * @flow
 */

import type { Action } from 'lib/core/flow';

import APP_ACTION_TYPES from './types';

/* ************                         **************
   ************ App Action Creators **************
   ************                         ************** */

export const initApplication = (): Action => ({
  type: APP_ACTION_TYPES.INIT_APPLICATION
});

export const setAppIsReady = ({ isLoggedIn }: { isLoggedIn: boolean }): Action => ({
  type: APP_ACTION_TYPES.SET_APPLICATION_IS_READY,
  payload: isLoggedIn
});

export const clearAppState = (): Action => ({
  type: APP_ACTION_TYPES.CLEAR_APP_STATE
});
