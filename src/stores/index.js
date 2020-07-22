/**
 * @flow
 */

import createStore from 'lib/core/createStore';
import { REDUX_STORE_REFERENCES } from './settings';
// import combinedReducers from './reducers';

export const generalStore = {
  createGeneralStore: () => createStore(null, /* combinedReducers */[], [], REDUX_STORE_REFERENCES.GENERAL),
  getGeneralStore: () => window[REDUX_STORE_REFERENCES.GENERAL]
};
