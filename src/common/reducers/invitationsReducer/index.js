import INVITATION_ACTION_TYPES from '../../actions/invitations/types';
import { ACTION_STATUSES } from '../../../lib/core/actionStatuses';

const initialState = () => ({
  raa: {
    list: {
      data: null,
      status: null,
      error: null
    },
    create: {
      status: null,
      error: null
    }
  }
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case INVITATION_ACTION_TYPES.CREATE_INVITATION:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          create: {
            error: null,
            status: ACTION_STATUSES.PENDING
          }
        }
      };
    case INVITATION_ACTION_TYPES.SET_CREATE_INVITATION_SUCCESS:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          create: {
            error: null,
            status: ACTION_STATUSES.SUCCEED
          }
        }
      };
    case INVITATION_ACTION_TYPES.SET_CREATE_INVITATION_FAILURE:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          create: {
            error: action.payload.error,
            status: ACTION_STATUSES.FAILED
          }
        }
      };

    case INVITATION_ACTION_TYPES.GET_ALL_INVITATIONS:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          list: {
            data: state[action.payload.type].list.data,
            error: null,
            status: ACTION_STATUSES.PENDING
          }
        }
      };
    case INVITATION_ACTION_TYPES.SET_GET_ALL_INVITATIONS_FAILURE:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          list: {
            data: state[action.payload.type].list.data,
            error: action.payload.error,
            status: ACTION_STATUSES.FAILED
          }
        }
      };
    case INVITATION_ACTION_TYPES.SET_GET_ALL_INVITATIONS_SUCCESS:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          list: {
            totalCount: action.payload.meta.total,
            data: action.payload.data,
            error: null,
            status: ACTION_STATUSES.SUCCEED
          }
        }
      };

    case INVITATION_ACTION_TYPES.RESET_GET_ALL_INVITATIONS_STATE:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          data: null,
          status: null,
          error: null
        }
      };
    case INVITATION_ACTION_TYPES.RESET_INVITATIONS_CREATE_STATE:
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          create: {
            error: null,
            status: null
          }
        }
      };
    default:
      return state;
  }
};
