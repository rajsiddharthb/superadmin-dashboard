import React, { useState } from 'react';
import { CBadge, CButton, CCollapse, CCardBody, CDataTable } from '@coreui/react';

/**
 const usersData = [
    { name: 'John Doe', email: 'test1raa@thedavincia.com', registered: '2018/01/01', role: 'Guest', status: 'Active' },
    { name: 'Samppa Nori', email: 'test2raa@thedavincia.com', registered: '2018/01/01', role: 'Member', status: 'Active' },
    { name: 'Estavan Lykos', email: 'test3raa@thedavincia.com', registered: '2018/02/01', role: 'Staff', status: 'Blocked' },
    { name: 'Chetan Mohamed', email: 'test4raa@thedavincia.com', registered: '2018/02/01', role: 'Admin', status: 'Blocked' },
    { name: 'Derick Maximinus', email: 'test5raa@thedavincia.com', registered: '2018/03/01', role: 'Member', status: 'Blocked' },
    { name: 'Friderik Dávid', email: 'test6raa@thedavincia.com', registered: '2018/01/21', role: 'Staff', status: 'Active' },
    { name: 'Yiorgos Avraamu', email: 'test7raa@thedavincia.com', registered: '2018/01/01', role: 'Member', status: 'Active' },
    { name: 'Avram Tarasios', email: 'test8raa@thedavincia.com', registered: '2018/02/01', role: 'Staff', status: 'Blocked' },
    { name: 'Quintin Ed', email: 'test9raa@thedavincia.com', registered: '2018/02/01', role: 'Admin', status: 'Blocked' },
    { name: 'Enéas Kwadwo', email: 'test10raa@thedavincia.com', registered: '2018/03/01', role: 'Member', status: 'Blocked' },
    { name: 'Agapetus Tadeáš', email: 'test11raa@thedavincia.com', registered: '2018/01/21', role: 'Staff', status: 'Active' },
    { name: 'Carwyn Fachtna', email: 'test12raa@thedavincia.com', registered: '2018/01/01', role: 'Member', status: 'Active' },
    { name: 'Nehemiah Tatius', email: 'test13raa@thedavincia.com', registered: '2018/02/01', role: 'Staff', status: 'Active' },
    { name: 'Ebbe Gemariah', email: 'test14raa@thedavincia.com', registered: '2018/02/01', role: 'Admin', status: 'Blocked' },
    { name: 'Eustorgios Amulius', email: 'test15raa@thedavincia.com', registered: '2018/03/01', role: 'Member', status: 'Blocked' },
    { name: 'Leopold Gáspár', email: 'test16raa@thedavincia.com', registered: '2018/01/21', role: 'Staff', status: 'Active' },
    { name: 'Pompeius René', email: 'test17raa@thedavincia.com', registered: '2018/01/01', role: 'Member', status: 'Active' },
    { name: 'Paĉjo Jadon', email: 'test18raa@thedavincia.com', registered: '2018/02/01', role: 'Staff', status: 'Active' },
    { name: 'Micheal Mercurius', email: 'test19raa@thedavincia.com', registered: '2018/02/01', role: 'Admin', status: 'Blocked' },
    { name: 'Ganesha Dubhghall', email: 'test20raa@thedavincia.com', registered: '2018/03/01', role: 'Member', status: 'Active' },
    { name: 'Hiroto Šimun', email: 'test21raa@thedavincia.com', registered: '2018/01/21', role: 'Staff', status: 'Blocked' },
    { name: 'Vishnu Serghei', email: 'test22raa@thedavincia.com', registered: '2018/01/01', role: 'Member', status: 'Blocked' },
    { name: 'Zbyněk Phoibos', email: 'test23raa@thedavincia.com', registered: '2018/02/01', role: 'Staff', status: 'Active' },
    { name: 'Aulus Agmundr', email: 'test24raa@thedavincia.com', registered: '2018/01/01', status: 'Active' },
    { name: 'Ford Prefect', email: 'test25raa@thedavincia.com', registered: '2001/05/25', status: 'Active' }
];
*/

function Test() {
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
    { key: 'name', _style: { width: '10%' } },
    { key: 'email', _style: { width: '20%' } },
    { key: 'registered', _style: { width: '15%' } },
    { key: 'status', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Blocked': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <CDataTable
      items={[]}
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
      scopedSlots={{
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
                      {item.status === 'Blocked' ? (
                        <CButton size="sm" color="info">
                          Unblock
                        </CButton>
                      ) : (
                        <CButton size="sm" color="danger" className="ml-1">
                          Block
                        </CButton>
                      )}
                    </CCardBody>
                  </CCollapse>
                )
      }}
    />
  );
}

export default Test;
