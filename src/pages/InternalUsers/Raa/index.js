import React, { useState } from 'react';
import RaaListContainer from 'common/containers/raa/RaaListContainer';
import RaaInvitationsContainer from 'common/containers/raa/InvitationsContainer';
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs
} from '@coreui/react';
import PageFixedIcon from 'common/components/PageFixedIcon';
import AddInvitationContainer from '../../../common/containers/raa/AddInvitationContainer';

const RAA = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="page">
      <div
        className="fixHeightPage"
      >
        <CTabs
          style={{
            paddingTop: 10
          }}
        >
          <CNav variant="pills" fill justified>
            <CNavItem>
              <CNavLink>
                Users
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>
                Invitations
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabContent fade>
            <CTabPane>
              <RaaListContainer />
            </CTabPane>
            <CTabPane>
              <RaaInvitationsContainer />
            </CTabPane>
          </CTabContent>
        </CTabs>
        {/* Modal */}
        {modalIsOpen && (
          <AddInvitationContainer
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
        )}
      </div>
      <PageFixedIcon onClick={() => setModalIsOpen(true)} />
    </div>
  );
};

export default RAA;
