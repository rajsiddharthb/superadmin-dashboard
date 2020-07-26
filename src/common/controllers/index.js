import { all } from 'redux-saga/effects';
import AuthController from './AuthController';
import AppController from './AppController';

export default function* () {
  yield all([
    AppController(),
    AuthController()
  ]);
}
