/* eslint-disable radix */
/* eslint-disable no-eval */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import StatusBar from '../components/StatusBar';
import HistoryOperations from '../components/HistoryOperations';
import HeaderInfo from '../components/HeaderInfo';
import Keyboard from '../components/Keyboard';
import ScreenOperations from '../components/ScreenOperations';
import saveOperation from '../utils/saveOperation';
import '../styles/Container.css';
import getOperationsLocalStorage from '../utils/getOperationsLocalStorage';

const Home = () => {
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState([]);

  //Checkear datos del Local Storage
  useEffect(() => {
    const operationsLocalStorage = getOperationsLocalStorage();
    setHistory(operationsLocalStorage);
  }, []);

  function resultOperation() {
    setResult(`${eval(operation)}`);
    if (operation !== '') {
      saveOperation(operation, history, setHistory);
    }
  }
  function reset() {
    setResult('');
    setOperation('');
  }
  function backspace() {
    setOperation(operation.slice(0, -1));
  }
  function getOperationOfHistory(datos) {
    setOperation(datos.operation);
    setResult(datos.result);
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
    //Verificar si es un n??mero
    const validateType = parseInt(type);
    if (!Number.isNaN(validateType)) setOperation(operation + type);
  }

  return (
    <>
      <StatusBar />
      <HistoryOperations history={history} setHistory={setHistory} getOperationOfHistory={getOperationOfHistory} />
      <HeaderInfo />
      <div className='main'>
        <ScreenOperations result={result} operation={operation} />
        <Keyboard handleOnClick={handleOnClick} />
      </div>
    </>
  );
};

export default Home;
