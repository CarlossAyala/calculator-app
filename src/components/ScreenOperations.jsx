import React from 'react';
import '../styles/ScreenOperations.css';

const ScreenOperations = ({ result, operation }) => {
  return (
    <div className='screen'>
      <div className='operation'>{operation}</div>
      <div className='result'>{result.slice(0, 8)}</div>
    </div>
  );
};

export default ScreenOperations;
