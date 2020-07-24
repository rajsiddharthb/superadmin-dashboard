/**
 * @flow
 */

import createStore from 'lib/core/createStore';
import combinedReducers from 'common/reducers';
import controllers from 'common/controllers';

import { REDUX_STORE_REFERENCES } from './settings';

const createGeneralStore = () => createStore(combinedReducers, controllers, [], REDUX_STORE_REFERENCES.GENERAL);
const getGeneralStore = () => window[REDUX_STORE_REFERENCES.GENERAL];

export {
  createGeneralStore,
  getGeneralStore
};
