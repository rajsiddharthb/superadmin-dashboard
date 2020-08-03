import React from 'react';
import { CIcon } from '@coreui/icons-react';

const PageFixedIcon = ({ onClick }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className="fixed-icon flex f-a-c f-d-c f-jc-c"
    onClick={onClick}
  >
    <div className="fixed-icon-inner">
      <CIcon
        name="cil-plus"
        className="mfe-xl-5-n4"
        size="3xl"
        color="white"
      />
    </div>
  </div>
);

export default PageFixedIcon;
