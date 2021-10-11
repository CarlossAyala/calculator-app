import React from 'react';
import '../styles/Keyboard.css';

const Keyboard = ({ handleOnClick }) => {
/*   onClick={(e) => handleOnClick(e.target.innerHTML)}*/
  return (
    <div className='keyboard'>
      <table>
        <tbody>
          <tr>
            <td className='ac cl-back' translate='no' onClick={(e) => handleOnClick('AC')}>
              AC
            </td>
            <td className='cl-back' onClick={() => handleOnClick('DEL')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon '
              >
                <path d='M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z' />
                <line x1='18' y1='9' x2='12' y2='15' />
                <line x1='12' y1='9' x2='18' y2='15' />
              </svg>
            </td>
            <td className='box-theme-dark' onClick={() => handleOnClick('/')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon cl-lightblue'
              >
                <circle cx='12' cy='6' r='2' />
                <line x1='5' y1='12' x2='19' y2='12' />
                <circle cx='12' cy='18' r='2' />
              </svg>
            </td>
            <td className='box-theme-dark' onClick={() => handleOnClick('*')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon cl-lightblue'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </td>
          </tr>
          <tr>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>7</td>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>8</td>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>9</td>
            <td className='box-theme-dark' onClick={() => handleOnClick('-')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon cl-lightblue'
              >
                <line x1='5' y1='12' x2='19' y2='12' />
              </svg>
            </td>
          </tr>
          <tr>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>4</td>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>5</td>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>6</td>
            <td className='box-theme-dark' onClick={() => handleOnClick('+')}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='icon cl-lightblue'
              >
                <line x1='12' y1='5' x2='12' y2='19' />
                <line x1='5' y1='12' x2='19' y2='12' />
              </svg>
            </td>
          </tr>
          <tr>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>1</td>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>2</td>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>3</td>
            <td className='cl-lightblue box-theme-dark' onClick={() => handleOnClick('=')}>
              <strong>=</strong>
            </td>
          </tr>
          <tr>
            <td onClick={(e) => handleOnClick(e.target.innerHTML)}>0</td>
            <td onClick={(e) => handleOnClick('.')}>.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Keyboard;
