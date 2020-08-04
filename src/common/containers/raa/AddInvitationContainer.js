import React, { useState, useEffect, useCallback } from 'react';
import {
  CButton,
  CForm,
  CInput,
  CFormText,
  CFormGroup,
  CLabel,
  CModal, CModalBody, CModalFooter, CModalHeader
} from '@coreui/react';
import { emailValidator } from 'lib/helpers/validators';
import classnames from 'classnames';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import { createInvitationSelector } from '../../selectors/invitationSelectors';
import actionStatuses from '../../../lib/core/actionStatuses';
import { createInvitation, reSetCreateInvitationState } from '../../actions/invitations/actions';

const initialValue = { value: '', error: null, isInitial: true };
const errorMessages = {
  email_is_required: 'Email is Required.',
  invalid_email: 'Invalid Email',
  first_name_is_required: 'Full Name is Required.',
  invalid_full_name: 'Requires minimum 4 character.',
  your_email: 'This is your email :) :) :).'
};

const invitationType = 'raa';

const SuccessFullInvitation = ({ email, fullName }) => (
  <div
    style={{
      width: '100%'
    }}
    className="flex f-d-c f-a-c f-jc-c"
  >
    <div className="flex f-jc-c f-d-c f-a-c" style={{ color: 'green' }}>
      <CIcon
        name="cil-checkAlt"
        className="mfe-xl-5-n4"
        size="3xl"
      />
      <div style={{ margin: '10 0' }}>
        <h3 className="text-success">Invitation successfully created!</h3>
      </div>
    </div>
    <div style={{ margin: '10 0' }}><h5>Email: {email}</h5></div>
    <div style={{ margin: '10 0' }}><h5>Full Name: {fullName}</h5></div>
  </div>
);

const AddInvitationContainer = ({ modalIsOpen, setModalIsOpen }) => {
  const [email, setEmail] = useState(initialValue);
  const [fullName, setFullName] = useState(initialValue);
  const [canCreate, setCanCreate] = useState(false);
  const dispatch = useDispatch();

  const { status, error } = useSelector(createInvitationSelector(invitationType));

  const resetState = useCallback(() => {
    dispatch(reSetCreateInvitationState(invitationType));
  }, [dispatch]);
  const validateCanCreate = useCallback(() => {
    if (!fullName.error && !email.error && !email.isInitial && !fullName.isInitial) {
      setCanCreate(true);
    } else {
      setCanCreate(false);
    }
  }, [setCanCreate, email, fullName]);

  useEffect(() => resetState, [dispatch, resetState]);
  useEffect(validateCanCreate, [setCanCreate, email, fullName]);
  // eslint-disable-next-line consistent-return
  const setAndValidateEmail = useCallback((e) => {
    e.stopPropagation();
    const { value } = e.target;

    if (!value) {
      return setEmail({ value, error: errorMessages.email_is_required, isInitial: false });
    }

    if (value === 'rajsiddhaarthb@gmail.com') {
      return setEmail({ value, error: errorMessages.your_email, isInitial: false });
    }
    if (!emailValidator(value)) {
      return setEmail({ value, error: errorMessages.invalid_email, isInitial: false });
    }

    setEmail({ value, error: null, isInitial: false });
  }, [setEmail]);
  // eslint-disable-next-line consistent-return
  const setAndValidateFullName = useCallback((e) => {
    e.preventDefault();
    const { value } = e.target;
    if (!value) {
      return setFullName({ value, error: errorMessages.first_name_is_required, isInitial: false });
    }

    if (value.length <= 3) {
      return setFullName({ value, error: errorMessages.invalid_full_name, isInitial: false });
    }

    setFullName({ value, error: null, isInitial: false });
  }, [setFullName]);
  const create = useCallback(() => {
    if (canCreate) {
      dispatch(createInvitation(invitationType, { email: email.value, fullName: fullName.value }));
    }
  }, [canCreate, dispatch, fullName, email]);

  return (
    <CModal
      className="create-invitation-container"
      show={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      closeOnBackdrop={false}
      fade
    >
      <CModalHeader closeButton={!actionStatuses.isActionStatusPending(status)}><h1>Invite Raa Member</h1></CModalHeader>
      <CModalBody>
        {!actionStatuses.isActionStatusSucceed(status) ? (
          <CForm>
            {error && <div style={{ width: '100%', marginBottom: 15, fontSize: 18, color: 'red' }} className="flex f-jc-c">{error}</div>}
            <p className="text-muted">
              <i>
                Type Email and full name of the user,
                If the user with the specified email does not exists,
                The System will create send an invitation to the email.
              </i>
            </p>
            <CFormGroup>
              <CLabel htmlFor="nf-email">Email</CLabel>
              <CFormText
                color="danger"
                style={{
                  display: email.error ? 'block' : 'none',
                  marginBottom: 4,
                  marginTop: '-0.25em'
                }}
              >
                {email.error}
              </CFormText>
              <CInput
                disabled={actionStatuses.isActionStatusPending(status)}
                size="md"
                type="email"
                id="nf-email"
                name="nf-email"
                placeholder="Type Email ..."
                value={email.value}
                className={classnames({
                  invalid: email.error,
                  valid: !email.isInitial && !email.error
                })}
                onChange={setAndValidateEmail}
              />

            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nf-fullName">Full Name</CLabel>
              <CFormText
                color="danger"
                style={{
                  display: fullName.error ? 'block' : 'none',
                  marginBottom: 4,
                  marginTop: '-0.25em'
                }}
                className="error-for-input"
              >{fullName.error}
              </CFormText>
              <CInput
                disabled={actionStatuses.isActionStatusPending(status)}
                size="md"
                className={classnames({
                  invalid: fullName.error,
                  valid: !fullName.isInitial && !fullName.error
                })}
                type="text"
                id="nf-fullName"
                placeholder="Type full name ..."
                onChange={setAndValidateFullName}
                value={fullName.value}
                name="fullName"
              />
            </CFormGroup>
          </CForm>
        ) : <SuccessFullInvitation email={email.value} fullName={fullName.value} />}
      </CModalBody>
      <CModalFooter>
        {canCreate && !actionStatuses.isActionStatusSucceed(status) && (
          <CButton color="primary" disabled={actionStatuses.isActionStatusPending(status)} onClick={create}>
            {actionStatuses.isActionStatusPending(status) ? (<><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />  Wait...</>) : 'create'}
          </CButton>
        )}
        {actionStatuses.isActionStatusSucceed(status) && (
          <CButton
            color="primary"
            onClick={resetState}
          >
            Create New
          </CButton>
        )}
        {' '}
        {!actionStatuses.isActionStatusSucceed(status) ? (
          <CButton
            color="secondary"
            disabled={actionStatuses.isActionStatusPending(status)}
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </CButton>
        ) : (
          <CButton
            color="secondary"
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </CButton>
        )}
      </CModalFooter>
    </CModal>
  );
};

export default AddInvitationContainer;
