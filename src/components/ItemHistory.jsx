import React from 'react';
import '../styles/ItemHistory.css';

const ItemHistory = () => {
  return (
    <div className='history-container--item'>
      <span className='container-date'>Today</span>
      <span className='container-operation'>2+2</span>
      <span className='container-result'>4</span>
    </div>
  );
};

export default ItemHistory;
