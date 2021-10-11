import React from 'react';
import Clock from './Clock';
import '../styles/StatusBar.css';

const StatusBar = () => {
  return (
    <div className='status-bar'>
      <span><Clock /></span>
      <i className='bx bxs-battery' />
    </div>
  );
};

export default StatusBar;
