import React from 'react';
import { CContainer } from '@coreui/react';
import routes from 'config/routes';

import Router from '../Router';

const TheContent = () => (
  <main className="c-main">
    <CContainer fluid>
      <Router routes={routes} />
    </CContainer>
  </main>
);

export default React.memo(TheContent);
