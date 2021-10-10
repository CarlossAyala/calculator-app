import React from 'react';
import StatusBar from '../components/StatusBar';
import HistoryOperations from '../components/HistoryOperations';
import HeaderInfo from '../components/HeaderInfo';
import Keyboard from '../components/Keyboard';
import ScreenOperations from '../components/ScreenOperations';
import '../styles/Container.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='phone'>
        <StatusBar />
        <HistoryOperations />
        <HeaderInfo />
        <div className='main'>
          <ScreenOperations />
          <Keyboard />
        </div>
      </div>
      <div className='navigation-button' />
    </div>
  );
};

export default Home;
