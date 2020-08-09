import USERS_ACTION_TYPES from './types';

export const fetchUsersList = (type, filters) => ({
  type: USERS_ACTION_TYPES.FETCH_USERS_LIST,
  payload: { type, filters }
});

export const setFetchUsersListFailure = (type, error) => ({
  type: USERS_ACTION_TYPES.SET_FETCH_FETCH_USERS_LIST_FAILURE,
  payload: { type, error }
});

export const setFetchUsersListSuccess = (type, data) => ({
  type: USERS_ACTION_TYPES.SET_FETCH_FETCH_USERS_LIST_SUCCESS,
  payload: { type, data }
});

export const clearUsersState = (type) => ({
  type: USERS_ACTION_TYPES.CLEAR_USERS_STATE,
  payload: { type }
});
