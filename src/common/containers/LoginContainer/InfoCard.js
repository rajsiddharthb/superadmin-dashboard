import React from 'react';
import { CCard, CCardBody } from '@coreui/react';

const InfoCard = () => (
  <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
    <CCardBody className="text-center">
      <div>
        <h2>Super Admin</h2>
        <p>
          Make Sure you have right access to this dashboard
        </p>
      </div>
    </CCardBody>
  </CCard>
);

export default InfoCard;
