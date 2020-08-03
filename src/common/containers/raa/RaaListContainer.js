// @flow
import React from 'react';
import Test from './test';
// import Table from 'common/components/Table';
// import { CBadge, CButton, CCollapse, CCardBody } from '@coreui/react';

function RaaListContainer() {
/*  const [details, setDetails] = useState([]);
  const columnDefs = [
    { key: 'name', _style: { width: '40%' } },
    { key: 'email', _style: { width: '20%' } },
    'Registered At',
    { key: 'status', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ];
* */
  /* const getBadge = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Blocked': return 'danger';

      default: return 'primary';
    }
  };
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
  const scopedSlots = {
    status:
        (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>
              {item.status}
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
    ),
    details:
    (item, index) => (
      <CCollapse show={details.includes(index)}>
        <CCardBody>
          <h4>
            {item.username}
          </h4>
          <p className="text-muted">User since: {item.registered}</p>
          <CButton size="sm" color="info">
            User Settings
          </CButton>
          <CButton size="sm" color="danger" className="ml-1">
            Delete
          </CButton>
        </CCardBody>
      </CCollapse>
    )
  };*!/ */
  return (
    // <Table
    //   columnsDefs={columnDefs}
    //   scopedSlots={{ ...scopedSlots }}
    //   rows={usersData}
    // />
    <div className="__container">
      <Test />
    </div>
  );
}

export default RaaListContainer;
