// @flow
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CBadge, CDataTable } from '@coreui/react';
import actionStatuses from 'lib/core/actionStatuses';
import Util from 'lib/helpers/Util';
import { usersByTypeSelector } from '../../selectors/usersSelector';
import { fetchUsersList } from '../../actions/users/actions';
import TOAST from '../../../lib/toastManager';

const buildDate = (date) => {
  const d = new Date(date);
  const localeTime = d.toLocaleTimeString();
  const localeDate = d.toLocaleDateString();

  return `${localeDate} ${localeTime}`;
};

const type = 'raa';
const limit = 20;
const fields = [
  { key: 'firstName', _style: { width: '10%' } },
  { key: 'lastName', _style: { width: '10%' } },
  { key: 'email', _style: { width: '20%' } },
  { key: 'phone', _style: { width: '20%' } },
  { key: 'country', _style: { width: '20%' } },
  { key: 'gender', _style: { width: '10%' } },
  { key: 'dateOfBirth', _style: { width: '15%' } },
  { key: 'verified/notVerified' },
  { key: 'registeredAt', _style: { width: '15%' } }
];

const getVerificationBadge = (verifiedAt) => verifiedAt ? 'success' : 'danger';

const scopedSlots = {
  dateOfBirth: (data) => <td>{data.dob ? Util.buildDate(data.dob, true) : '-'}</td>,
  registeredAt: (data) => <td>{buildDate(data.createdAt)}</td>,
  country: (data) => <td>{data.address?.country || '-'}</td>,
  'verified/notVerified': (data) => (
    <td>
      <CBadge size="lg" color={getVerificationBadge(data.verifiedAt)}>
        {data.verifiedAt ? 'VERIFIED' : 'NOT VERIFIED'}
      </CBadge>
    </td>
  )
};

function RaaListContainer() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const state = useSelector(usersByTypeSelector(type));

  const handleFetchUsers = useCallback(() => {
    dispatch(fetchUsersList(type, { offset: (currentPage - 1) * limit, limit: 20 }));
  }, [dispatch, currentPage]);
  const showMessage = useCallback(() => {
    if (actionStatuses.isActionStatusFailed(state.status)) {
      TOAST.error(state.error, { autoDismissTimeout: 7000 });
    }
  }, [state]);

  useEffect(showMessage, [state.status]);
  useEffect(handleFetchUsers, [dispatch, currentPage]);

  const handlePageChange = useCallback((nextPage) => {
    setCurrentPage(nextPage);
  }, [setCurrentPage]);

  return (
    <div className="__container">
      <div>
        <p className="text-info" style={{ fontSize: 16 }}>
          Total Count - {state.totalCount}
        </p>
      </div>
      <CDataTable
        items={state.data || []}
        fields={fields}
        columnFilter
        loading={actionStatuses.isActionStatusPending(state.status)}
        hover
        sorter
        border
        outlined
        responsive
        size="ms"
        pagination={{
          activePage: currentPage,
          dots: true,
          limit: 4,
          pages: 20,
          onActivePageChange: handlePageChange
        }}
        noItemsViewSlot="No Data To Display"
        scopedSlots={scopedSlots}
      />
    </div>
  );
}

export default RaaListContainer;
