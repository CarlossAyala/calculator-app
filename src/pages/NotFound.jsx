import React from 'react';
import { Link } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <>
      <StatusBar />
      <div className='not-found'>
        <div className='not-found-header'>
          <span className='title'>Page Not Found</span>
        </div>
        <div className='msg-not-found'>
          <span className='error'>
            <strong>Error 404</strong>
            {' '}
            - Page Not Found
          </span>
          <Link to='/'>Go to Calculator</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
