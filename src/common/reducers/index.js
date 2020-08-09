import { combineReducers } from 'redux';

import application from './appReducer';
import auth from './auth';
import user from './user';
import invitations from './invitationsReducer';
import users from './urersReducer';

export default combineReducers({
  application,
  invitations,
  users,
  user,
  auth
});
