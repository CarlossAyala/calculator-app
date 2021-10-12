/* eslint-disable new-cap */
/* eslint-disable no-eval */
import getOperationsLocalStorage from './getOperationsLocalStorage';

function saveOperation(operation, history, setHistory) {
  //Formato de fecha
  const date = new Date();

  //Resolver Operacion
  const result = `${eval(operation)}`;
  const recordOfOperation = {
    operation,
    result,
    date: new Intl.DateTimeFormat('es').format(date),
    hour: `${date.getHours()}:${date.getMinutes()}`,
    id: Date.now(),
  };

  //Guardar datos en el Local Storage
  const operations = getOperationsLocalStorage();
  //Añadir la nueva Operacion
  operations.push(recordOfOperation);
  //Convertir de String a arreglo para localStorage
  localStorage.setItem('operations', JSON.stringify(operations));

  //Actulizar estado del Historial
  setHistory(history.concat(recordOfOperation));
}

export default saveOperation;
