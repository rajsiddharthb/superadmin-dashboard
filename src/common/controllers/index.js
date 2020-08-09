import { all } from 'redux-saga/effects';
import AuthController from './AuthController';
import AppController from './AppController';
import InvitationController from './InvitationsController';
import UsersController from './UserController';

export default function* () {
  yield all([
    InvitationController(),
    UsersController(),
    AuthController(),
    AppController()
  ]);
}
