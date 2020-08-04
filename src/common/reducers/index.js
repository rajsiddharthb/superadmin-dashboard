import { combineReducers } from 'redux';

import application from './appReducer';
import auth from './auth';
import user from './user';
import invitations from './invitationsReducer';

export default combineReducers({
  application,
  invitations,
  user,
  auth
});
