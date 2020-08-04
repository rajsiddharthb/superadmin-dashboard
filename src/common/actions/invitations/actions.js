import INVITATION_ACTION_TYPES from './types';

export const createInvitation = (type, data) => ({
  type: INVITATION_ACTION_TYPES.CREATE_INVITATION,
  payload: { type, data }
});

export const setCreateInvitationFailure = (type, error) => ({
  type: INVITATION_ACTION_TYPES.SET_CREATE_INVITATION_FAILURE,
  payload: { type, error }
});

export const setCreateInvitationSuccess = (type, invitation) => ({
  type: INVITATION_ACTION_TYPES.SET_CREATE_INVITATION_SUCCESS,
  payload: { type, invitation }
});

export const reSetCreateInvitationState = (type) => ({
  type: INVITATION_ACTION_TYPES.RESET_INVITATIONS_CREATE_STATE,
  payload: { type }
});
