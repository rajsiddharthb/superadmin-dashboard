import React from 'react';
import { CFooter } from '@coreui/react';

const TheFooter = () => (
  <CFooter>
    <div>
      <a href="https://staging.thedavincia.com" target="__blank" rel="noopener noreferrer">Davincia</a>
      <span className="ml-1">&copy; 2020 The Davincia.</span>
    </div>
    <div className="mfs-auto">
      <span className="mr-1">Powered by</span>
      The Davincia Team
    </div>
  </CFooter>
);

export default React.memo(TheFooter);
