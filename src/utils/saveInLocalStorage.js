/* eslint-disable no-eval */
import getOperationsLocalStorage from './getOperationsLocalStorage';

function saveInLocalStorage(operation) {
  //Formato de fecha
  const date = new Date();

  //Resolver Operacion
  const result = `${eval(operation)}`;
  const recordOfOperation = {
    operation,
    result,
    date: new Intl.DateTimeFormat('es').format(date),
    hour: `${date.getHours()}:${date.getMinutes()}`,
  };

  //Guardar datos
  const operations = getOperationsLocalStorage();
  //Añadir la nueva Operacion
  operations.push(recordOfOperation);
  //Convertir de String a arreglo para localStorage
  localStorage.setItem('operations', JSON.stringify(operations));
}

export default saveInLocalStorage;
