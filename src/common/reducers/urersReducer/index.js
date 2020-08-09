import { ACTION_STATUSES } from 'lib/core/actionStatuses';
import USERS_ACTION_TYPES from '../../actions/users/types';

const initialState = () => ({});

export default (state = initialState(), action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.FETCH_USERS_LIST:
      return {
        ...state,
        [action.payload.type]: {
          status: ACTION_STATUSES.PENDING,
          error: null,
          data: null,
          totalCount: null
        }
      };
    case USERS_ACTION_TYPES.SET_FETCH_FETCH_USERS_LIST_SUCCESS:
      return {
        ...state,
        [action.payload.type]: {
          status: ACTION_STATUSES.SUCCEED,
          error: null,
          data: action.payload.data.data,
          totalCount: action.payload.data.totalCount
        }
      };
    case USERS_ACTION_TYPES.SET_FETCH_FETCH_USERS_LIST_FAILURE:
      return {
        ...state,
        [action.payload.type]: {
          status: ACTION_STATUSES.FAILED,
          error: null,
          data: null,
          totalCount: null
        }
      };
    case USERS_ACTION_TYPES.CLEAR_USERS_STATE:
      // eslint-disable-next-line no-param-reassign
      delete state[action.payload.type];
      return {
        ...state
      };
    default: return state;
  }
};
