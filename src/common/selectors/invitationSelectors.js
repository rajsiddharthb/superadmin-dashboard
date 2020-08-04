import { createSelector } from 'reselect';

const getInvitationsState = state => state.invitations;

export const createInvitationSelector = (type) => createSelector(
  getInvitationsState,
  state => state[type] && state[type].create || {}
);
