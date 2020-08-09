import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CBadge, CButton, CDataTable } from '@coreui/react';
import { getAllInvitationsSelector } from '../../selectors/invitationSelectors';
import { getAllInvitations } from '../../actions/invitations/actions';
import actionStatuses from '../../../lib/core/actionStatuses';

const buildDate = (date) => {
  const d = new Date(date);
  const localeTime = d.toLocaleTimeString();
  const localeDate = d.toLocaleDateString();

  return `${localeDate} ${localeTime}`;
};

function Table({ data, isLoading }) {
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: 'email' },
    { key: 'fullName' },
    { key: 'createdAt' },
    { key: 'lastUpdate' },
    { key: 'status', _style: { width: '10%' } }
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'pending': return 'primary';
      case 'rejected': return 'danger';
      default: return 'success';
    }
  };

  return (
    <CDataTable
      items={data}
      fields={fields}
      columnFilter
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      border
      outlined
      responsive
      size="ms"
      pagination
      noItemsViewSlot="No Data To Display"
      loading={isLoading}
      scopedSlots={{
        email: (item) => <td>{item.meta_data.email}</td>,
        fullName: (item) => <td>{item.meta_data.fullName}</td>,
        lastUpdate: (item) => <td>{buildDate(item.updatedAt)}</td>,
        createdAt: (item) => <td>{buildDate(item.createdAt)}</td>,
        status:
                (item) => (
                  <td style={{ margin: '0 auto' }}>
                    <CBadge size="lg" color={getBadge(item.status)}>
                      {item.status.toUpperCase()}
                    </CBadge>
                  </td>
                ),
        show_details:
                (item, index) => (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={() => { toggleDetails(index); }}
                    >
                      {details.includes(index) ? 'Hide' : 'Show'}
                    </CButton>
                  </td>
                )
      }}
    />
  );
}

function InvitationsContainer() {
  const dispatch = useDispatch();
  const [query] = useState({ limit: 20, offset: 0, typeId: 1 });

  const state = useSelector(getAllInvitationsSelector('raa'));
  const fetchData = useCallback(() => {
    dispatch(getAllInvitations('raa', query));
  }, [dispatch, query]);

  useEffect(fetchData, [dispatch, query]);

  return (
    <Table
      data={state.data}
      isLoading={actionStatuses.isActionStatusPending(state.status)}
      totalCount={state.totalCount}
    />
  );
}

export default InvitationsContainer;
