import React from 'react';
import Footer from '../Footer';
import Content from '../Content';
import AppSidebar from '../AppSidebar';
import AppHeader from '../AppHeader';

const TheLayout = () => (
  <div className="c-app c-default-layout">
    <AppSidebar />
    <div className="c-wrapper">
      <AppHeader />
      <div className="c-body">
        <Content />
      </div>
      <Footer />
    </div>
  </div>
);

export default TheLayout;
