/**
 * @flow
 */

import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

/**
 * @param {Array} rootReducer - combined reducers
 * @param {Generator} controllerManager - controllers with saga
 * @param {Array} middlewares - hoc
 * @param {String} storeName -
 * @returns {Object} - store
 */
const dynamicallyCreateStore = (rootReducer: Object, controllerManager: Function, middlewares: Array<Function | null> = [], storeName: string) => {
  // If there is more than one stores, this will help to avoid confusions
  if (window[storeName]) {
    return window[storeName];
  }
  const initialState = {};
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();

  /**
   * @returns {Array} - middleware
   */
  const switchMode = () => {
    if (process.env.NODE_ENV === 'development') {
      return [sagaMiddleware, createLogger, ...middlewares];
    }

    return [...middlewares];
  };

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...switchMode())
    )
  );

  window[storeName] = store;
  sagaMiddleware.run(controllerManager);

  return store;
};

export default dynamicallyCreateStore;
