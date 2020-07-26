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
          src={user.avatar}
          className="c-avatar-img"
          alt="admin@bootstrapmaster.com"
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
        <strong>{`${user.firstName}  ${user.lastName}`}</strong>
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
