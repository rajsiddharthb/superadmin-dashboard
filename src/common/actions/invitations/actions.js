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

// get all
export const getAllInvitations = (type, data) => ({
  type: INVITATION_ACTION_TYPES.GET_ALL_INVITATIONS,
  payload: { type, data }
});

export const getGetAllInvitationsSuccess = (type, { data, meta }) => ({
  type: INVITATION_ACTION_TYPES.SET_GET_ALL_INVITATIONS_SUCCESS,
  payload: { type, data, meta }
});

export const getGetAllInvitationsFailure = (type, error) => ({
  type: INVITATION_ACTION_TYPES.SET_GET_ALL_INVITATIONS_FAILURE,
  payload: { type, error }
});

export const resetGetAllInvitationsState = (type) => ({
  type: INVITATION_ACTION_TYPES.RESET_GET_ALL_INVITATIONS_STATE,
  payload: { type }
});
