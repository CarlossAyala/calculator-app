import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <div className='phone'>
        {children}
      </div>
      <div className='navigation-button' />
    </div>
  );
};

export default Layout;
