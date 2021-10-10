import React from 'react';
/* import MessageEmptyHistory from './MessageEmptyHistory'; */
import '../styles/HistoryOperations.css';

const HistoryOperations = () => {
  return (
    <div className='history'>
      <div className='history-header'>
        <i id='clear-h' title='Clear history' className='bx bx-trash-alt shadow' />
        <span>History</span>
        <i id='close-h' title='Close history' className='bx bx-chevron-up shadow' />
      </div>
      <div className='history-container'>
        {/* <MessageEmptyHistory /> */}

      </div>
    </div>
  );
};

export default HistoryOperations;
