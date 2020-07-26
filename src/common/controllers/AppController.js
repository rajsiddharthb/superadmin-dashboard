/**
 * @flow
 */
import { put, takeEvery } from 'redux-saga/effects';
import { history } from 'config/routes';
import config from 'config';
import NetworkService from 'common/services/network/NetworkService';

import APP_ACTIONS_TYPES from 'common/actions/app/types';

import {
  setUser
} from 'common/actions/user/actions';

import CacheService from 'common/services/storage/CacheService';
import { setAppIsReady } from 'common/actions/app/actions';

const davCoreApi = new NetworkService(`${config.davinciaCoreApi.uri}/${config.davinciaCoreApi.versions.v1}/users`);

function* initApp() {
  const token = CacheService.getItem('auth_token');
  if (!token) {
    history.push('/login');
    yield put(setAppIsReady({ isLoggedIn: false, isReady: true }));
    return;
  }

  try {
    const { body: { data } } = yield davCoreApi.makeAPIGetRequest('me');

    yield put(setUser(data));
    yield put(setAppIsReady({ isLoggedIn: true, isReady: true }));
  } catch (err) {
    yield put(setAppIsReady({ isLoggedIn: false }));
  }
}

function* appSagaWatcher<T>(): Iterable<T> {
  yield takeEvery(APP_ACTIONS_TYPES.INIT_APPLICATION, initApp);
}

export default appSagaWatcher;
