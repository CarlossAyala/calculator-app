/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/ItemHistory.css';

const ItemsHistory = ({ operations }) => {
  return (
    <>
      { operations.map((item, index) => (
        <div key={item.id} className='history-container--item'>
          <span key={`date_${item.id}`} className='container-date'>{`${item.date} - ${item.hour}`}</span>
          <span key={`operation_${item.id}`} className='container-operation'>{item.operation}</span>
          <span key={`result_${item.id}`} className='container-result'>{item.result}</span>
        </div>
      ))}
    </>
  );
};

export default ItemsHistory;
