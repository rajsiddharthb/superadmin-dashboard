import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import NetworkService from 'common/services/network/NetworkService';
import config from 'config';
import {
  setCreateInvitationFailure, setCreateInvitationSuccess,
  getGetAllInvitationsSuccess, getGetAllInvitationsFailure
} from '../actions/invitations/actions';
import INV_ACTION_TYPES from '../actions/invitations/types';

const invitationService = new NetworkService(`${config.davinciaCoreApi.uri}/${config.davinciaCoreApi.versions.v1}/invitations`);

function* createInvitation({ payload }) {
  try {
    const { body: { data } } = yield invitationService.makeAPIPostRequest(payload.type, { body: payload.data });
    yield put(setCreateInvitationSuccess(payload.type, data.invitation));
  } catch (e) {
    yield put(setCreateInvitationFailure(payload.type, e.message));
  }
}

function* getAllInvitation({ payload }) {
  try {
    const { body } = yield invitationService.makeAPIGetRequest('', { query_params: payload.data });

    yield put(getGetAllInvitationsSuccess(payload.type, body));
  } catch (e) {
    yield put(getGetAllInvitationsFailure(payload.type, e.message));
  }
}

function* invitationController() {
  yield takeEvery(INV_ACTION_TYPES.CREATE_INVITATION, createInvitation);
  yield takeLatest(INV_ACTION_TYPES.GET_ALL_INVITATIONS, getAllInvitation);
}

export default invitationController;
