/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
/* import getOperationsLocalStorage from '../utils/getOperationsLocalStorage'; */
import MessageEmptyHistory from './MessageEmptyHistory';
import ItemsHistory from './ItemsHistory';
import clearLocalStorage from '../utils/clearLocalStorage';
import '../styles/HistoryOperations.css';

const HistoryOperations = ({ history, setHistory, getOperationOfHistory }) => {
  const nameClass = history.length > 0 ? 'history-container' : 'history-container empty-h';

  function closeHistory() {
    const containerHistory = document.querySelector('.history');

    containerHistory.classList.remove('open-history');
  }
  function clearHistory() {
    setHistory([]);
    clearLocalStorage();
  }
  function getInfoOfHistoryItem(e) {
    if (e.target.classList.contains('history-container--item')) {
      const datos = {
        operation: e.target.children[1].innerHTML,
        result: e.target.children[2].innerHTML,
      };
      getOperationOfHistory(datos);
      closeHistory();
    }
  }

  return (
    <div className='history'>
      <div className='history-header'>
        <i id='clear-h' title='Clear history' className='bx bx-trash-alt shadow' onClick={() => clearHistory()} />
        <span>History</span>
        <i id='close-h' title='Close history' className='bx bx-chevron-up shadow' onClick={() => closeHistory()} />
      </div>
      <div className={nameClass} onClick={(e) => getInfoOfHistoryItem(e)}>
        {
          history.length > 0 ? <ItemsHistory operations={history} /> : <MessageEmptyHistory />
        }
      </div>
    </div>
  );
};

export default HistoryOperations;
