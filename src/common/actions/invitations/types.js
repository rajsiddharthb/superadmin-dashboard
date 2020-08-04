// @flow
import createSymbol from 'lib/core/createSymbol';

const createInvitationSymbol = createSymbol('INVITATIONS');

export default {
  CREATE_INVITATION: createInvitationSymbol('CREATE_INVITATION'),
  SET_CREATE_INVITATION_FAILURE: createInvitationSymbol('SET_CREATE_INVITATION_FAILURE'),
  SET_CREATE_INVITATION_SUCCESS: createInvitationSymbol('SET_CREATE_INVITATION_SUCCESS'),

  RESET_INVITATIONS_CREATE_STATE: createInvitationSymbol('RESET_INVITATIONS_CREATE_STATE')
};
