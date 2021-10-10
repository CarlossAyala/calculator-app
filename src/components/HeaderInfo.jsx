import React from 'react';
import '../styles/HeaderInfo.css';

const HeaderInfo = () => {
  return (
    <div className='header'>
      <i id='theme' title='Theme Light' className='bx bx-sun shadow' />
      <span className='title'>Calculator</span>
      <i id='open-h' title='History' className='bx bx-history shadow' />
    </div>
  );
};

export default HeaderInfo;
