/**
 * @flow
 */
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import config from 'config';
import NetworkService from 'common/services/network/NetworkService';

import AUTH_ACTION_TYPES from 'common/actions/auth/types';

import {
  setLoginSuccess,
  setLoginError,
  setLogoutSuccess
} from 'common/actions/auth/actions';

import {
  setUser,
  resetUserState
} from 'common/actions/user/actions';

import { setAppIsReady } from 'common/actions/app/actions';
import CacheService from '../services/storage/CacheService';

const davCoreApi = new NetworkService(`${config.davinciaCoreApi.uri}/${config.davinciaCoreApi.versions.v1}/users`);

function* loginSaga({ payload }) {
  const { email, password } = payload;
  try {
    const { body: { data, meta } } = yield davCoreApi.makeAPIPostRequest('superadmin/login', {
      body: { email, password }
    });

    // eslint-disable-next-line camelcase
    const { auth_token } = meta;
    CacheService.setAuthToken(auth_token);

    yield put(setAppIsReady({ isLoggedIn: true }));
    yield put(setUser(data));
    yield put(setLoginSuccess(auth_token));
  } catch (err) {
    yield put(setLoginError(err.message));
  }
}

function* logOutSaga() {
  davCoreApi.makeAPIDeleteRequest('logout').then().catch();
  yield put(resetUserState());

  // this for window reload function, without waiting to do api call and refresh the window may cause logout api call aborting
  CacheService.clearStorage();
  yield put(setLogoutSuccess());
}

function* authSagaWatcher<T>(): Iterable<T> {
  yield takeLatest(AUTH_ACTION_TYPES.ATTEMPT_TO_LOG_IN, loginSaga);
  yield takeEvery(AUTH_ACTION_TYPES.ATTEMPT_TO_LOG_OUT, logOutSaga);
}

export default authSagaWatcher;
