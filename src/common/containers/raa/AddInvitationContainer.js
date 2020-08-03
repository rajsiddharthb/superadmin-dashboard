import React from 'react';
import {
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CModal, CModalBody, CModalFooter, CModalHeader
} from '@coreui/react';

const AddInvitationContainer = ({ modalIsOpen, setModalIsOpen }) => (
  <CModal
    show={modalIsOpen}
    onClose={() => setModalIsOpen(false)}
    fade
  >
    <CModalHeader closeButton><h1>Invite Raa Member</h1></CModalHeader>
    <CModalBody>
      <CForm>
        <p className="text-muted">Type Email and full name of the user, If the user with the specified email does not exists, The System will create send an invitation to the email. </p>
        <CInputGroup className="mb-3">
          <CInput
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
        </CInputGroup>
        <CInputGroup className="mb-4">
          <CInput
            type="fullName"
            placeholder="Full Name"
            name="fullName"
          />
        </CInputGroup>
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton color="primary">Create</CButton>{' '}
      <CButton
        color="secondary"
        onClick={() => setModalIsOpen(false)}
      >Cancel
      </CButton>
    </CModalFooter>
  </CModal>
);

export default AddInvitationContainer;
