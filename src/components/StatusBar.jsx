import React from 'react';
import '../styles/StatusBar.css';

const StatusBar = () => {
  return (
    <div className='status-bar'>
      <span>9:41</span>
      <i className='bx bxs-battery' />
    </div>
  );
};

export default StatusBar;
