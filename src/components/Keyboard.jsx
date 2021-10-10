import React from 'react';
import '../styles/Keyboard.css';

const Keyboard = () => {
  return (
    <div className='keyboard'>
      <table>
        <tbody>
          <tr>
            <td className='ac cl-back' translate='no'>
              AC
            </td>
            <td className='cl-back'>
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
            <td className='box-theme-dark'>
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
                <line x1='19' y1='5' x2='5' y2='19' />
                <circle cx='6.5' cy='6.5' r='2.5' />
                <circle cx='17.5' cy='17.5' r='2.5' />
              </svg>
            </td>
            <td className='box-theme-dark'>
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
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td className='box-theme-dark'>
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
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td className='box-theme-dark'>
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
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className='box-theme-dark'>
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
            <td>0</td>
            <td>.</td>
            <td className='cl-lightblue box-theme-dark'>
              {' '}
              <strong>=</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Keyboard;
