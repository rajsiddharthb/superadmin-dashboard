import { takeLatest, put } from 'redux-saga/effects';
import NetworkService from 'common/services/network/NetworkService';
import config from 'config';
import USERS_ACTION_TYPES from 'common/actions/users/types';
import { setFetchUsersListFailure, setFetchUsersListSuccess } from '../actions/users/actions';

const userApi = new NetworkService(`${config.davinciaCoreApi.uri}/${config.davinciaCoreApi.versions.v1}/users`);

function* fetchUsers({ payload }) {
  try {
    const { body: { data, meta: { total } } } = yield userApi.makeAPIGetRequest(payload.type, { query_params: payload.filters });
    yield put(setFetchUsersListSuccess(payload.type, { data, totalCount: total }));
  } catch (e) {
    yield put(setFetchUsersListFailure(payload.type, e.message));
  }
}

function* userControllerWatcher() {
  yield takeLatest(USERS_ACTION_TYPES.FETCH_USERS_LIST, fetchUsers);
}

export default userControllerWatcher;
