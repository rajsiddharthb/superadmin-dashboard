import React, { useCallback, useState } from 'react';
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
  const [activeTab, setActiveTab] = useState(0);
  const onActiveTabChange = useCallback((tab) => setActiveTab(tab), [setActiveTab]);

  return (
    <div className="page">
      <div
        className="fixHeightPage"
      >
        <CTabs
          activeTab={activeTab}
          onActiveTabChange={onActiveTabChange}
        >
          <CNav variant="pills" fill justified >
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
          <CTabContent fade style={{ paddingTop: 15 }}>
            <CTabPane>
              {activeTab === 0 && <RaaListContainer />}
            </CTabPane>
            <CTabPane>
              {activeTab === 1 && <RaaInvitationsContainer />}
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
