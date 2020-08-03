import React from 'react';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const TheHeaderDropdown = ({ logOut, user }) => (
  <CDropdown
    inNav
    className="c-header-nav-items mx-2"
    direction="down"
  >
    <CDropdownToggle className="c-header-nav-link" caret={false}>
      <div className="c-avatar">
        <CImg
          src={user && user.avatar}
          className="c-avatar-img"
          alt={user && user.email || ''}
        />
      </div>
    </CDropdownToggle>
    <CDropdownMenu className="pt-0" placement="bottom-end">
      <CDropdownItem
        header
        tag="div"
        color="light"
        className="text-center"
      >
        <strong>{`${user && user.firstName}  ${user && user.lastName}`}</strong>
      </CDropdownItem>
      <CDropdownItem divider />
      <CDropdownItem
        onClick={logOut}
      >
        <CIcon name="cil-accountLogout" className="mfe-2" />
        Log Out
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
);

export default TheHeaderDropdown;
