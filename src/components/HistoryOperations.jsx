/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import getOperationsLocalStorage from '../utils/getOperationsLocalStorage';
import MessageEmptyHistory from './MessageEmptyHistory';
import ItemsHistory from './ItemsHistory';
/* import clearLocalStorage from '../utils/clearLocalStorage'; */
import '../styles/HistoryOperations.css';

const HistoryOperations = () => {
  const operationsLocalStorage = getOperationsLocalStorage();
  const nameClass = operationsLocalStorage.length > 0 ? 'history-container' : 'history-container empty-h';

  function closeHistory() {
    const containerHistory = document.querySelector('.history');

    containerHistory.classList.remove('open-history');
  }
  function clearHistory() {
    //clearLocalStorage();
    alert('No disponible aún');
  }
  return (
    <div className='history'>
      <div className='history-header'>
        <i id='clear-h' title='Clear history' className='bx bx-trash-alt shadow' onClick={() => clearHistory()} />
        <span>History</span>
        <i id='close-h' title='Close history' className='bx bx-chevron-up shadow' onClick={() => closeHistory()} />
      </div>
      <div className={nameClass}>
        {
          operationsLocalStorage.length > 0 ? <ItemsHistory operations={operationsLocalStorage} /> : <MessageEmptyHistory />
        }
      </div>
    </div>
  );
};

export default HistoryOperations;
