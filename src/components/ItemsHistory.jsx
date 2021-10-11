/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/ItemHistory.css';

const ItemsHistory = ({ operations }) => {
  return (
    <>
      { operations.map((item, index) => (
        <div key={index} className='history-container--item'>
          <span key={`date${index}`} className='container-date'>{`${item.date} - ${item.hour}`}</span>
          <span key={`operation${index}`} className='container-operation'>{item.operation}</span>
          <span key={`result${index}`} className='container-result'>{item.result}</span>
        </div>
      ))}
    </>
  );
};

export default ItemsHistory;
