import React from 'react';

const Loader = ({ size }) => (
  <div
    style={{
      width: '100%',
      height: '100%'
    }}
    className="flex f-d-c f-a-c f-jc-c"
  >
    <div
      style={{
        width: size,
        height: size
      }}
      className="spinner-border"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>

);

export default Loader;
