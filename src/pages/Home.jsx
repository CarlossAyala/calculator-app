/* eslint-disable radix */
/* eslint-disable no-eval */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import HistoryOperations from '../components/HistoryOperations';
import HeaderInfo from '../components/HeaderInfo';
import Keyboard from '../components/Keyboard';
import ScreenOperations from '../components/ScreenOperations';
import saveInLocalStorage from '../utils/saveInLocalStorage';
import '../styles/Container.css';

const Home = () => {
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  function resultOperation() {
    setResult(`${eval(operation)}`);
    if (operation !== '') {
      //Guardar en el LocalStorag
      saveInLocalStorage(operation);
    }
  }
  function reset() {
    setResult('');
    setOperation('');
  }
  function backspace() {
    setOperation(operation.slice(0, -1));
  }

  function handleOnClick(type) {
    //Permitir ingresar signos - Logica
    const lastCharacter = operation.slice(-1);
    let isEmpty = false;
    // eslint-disable-next-line no-unneeded-ternary
    const lastCharacterIsNumeric = !Number.isNaN(parseInt(lastCharacter)) ? true : false;
    if (lastCharacter === '') isEmpty = true;

    if (type === 'AC') reset();
    if (type === 'DEL') backspace();
    if (type === '/' && (lastCharacterIsNumeric || isEmpty)) setOperation(operation + type);
    if (type === '*' && (lastCharacterIsNumeric || isEmpty)) setOperation(operation + type);
    if (type === '+' && (lastCharacterIsNumeric || isEmpty)) setOperation(operation + type);
    if (type === '-' && (lastCharacterIsNumeric || isEmpty)) setOperation(operation + type);
    if (type === '.' && (lastCharacterIsNumeric || isEmpty)) setOperation(operation + type);
    if (type === '=') {
      resultOperation();
    }
    //Verificar si es un número
    const validateType = parseInt(type);
    if (!Number.isNaN(validateType)) setOperation(operation + type);
  }

  return (
    <div className='container'>
      <div className='phone'>
        <StatusBar />
        <HistoryOperations />
        <HeaderInfo />
        <div className='main'>
          <ScreenOperations result={result} operation={operation} />
          <Keyboard handleOnClick={handleOnClick} />
        </div>
      </div>
      <div className='navigation-button' />
    </div>
  );
};

export default Home;
