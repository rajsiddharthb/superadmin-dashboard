import { combineReducers } from 'redux';

import application from './appReducer';
import auth from './auth';
import user from './user';

export default combineReducers({
  application,
  user,
  auth
});
