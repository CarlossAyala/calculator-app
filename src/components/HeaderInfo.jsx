/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../styles/HeaderInfo.css';

const HeaderInfo = () => {
  function changeTheme(e) {
    const containerPhone = document.querySelector('.phone');
    const containerAll = document.querySelector('.container');

    containerPhone.classList.toggle('theme-dark');
    containerAll.classList.toggle('gradient-dark');

    if (containerPhone.classList.contains('theme-dark')) {
      e.target.classList.replace('bx-sun', 'bx-moon');
      e.target.title = 'Theme Dark';
    } else {
      e.target.classList.replace('bx-moon', 'bx-sun');
      e.target.title = 'Theme Light';
    }
  }
  function openHistory() {
    const containerHistory = document.querySelector('.history');
    containerHistory.classList.add('open-history');
  }
  return (
    <div className='header'>
      <i id='theme' title='Theme Light' className='bx bx-sun shadow' onClick={(e) => changeTheme(e)} />
      <span className='title'>Calculator</span>
      <i id='open-h' title='History' className='bx bx-history shadow' onClick={() => openHistory()} />
    </div>
  );
};

export default HeaderInfo;
