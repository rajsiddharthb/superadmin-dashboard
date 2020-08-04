import { all } from 'redux-saga/effects';
import AuthController from './AuthController';
import AppController from './AppController';
import InvitationController from './InvitationsController';

export default function* () {
  yield all([
    InvitationController(),
    AppController(),
    AuthController()
  ]);
}
