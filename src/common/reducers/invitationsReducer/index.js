import INVITATION_ACTION_TYPES from '../../actions/invitations/types';
import { ACTION_STATUSES } from '../../../lib/core/actionStatuses';

const initialState = () => ({
  raa: {
    data: null,
    status: null,
    error: null,
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
      // eslint-disable-next-line no-case-declarations
      const list = state[action.payload.type].data || [];
      if (list.length) {
        list.shift(action.payload.invitation);
      }
      return {
        ...state,
        [action.payload.type]: {
          ...state[action.payload.type],
          data: [
            ...list
          ],
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
