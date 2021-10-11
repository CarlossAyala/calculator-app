function getOperationsLocalStorage() {
  let operations;
  //Revisamos los valores de LocalStore
  if (localStorage.getItem('operations') === null) {
    operations = [];
  } else {
    operations = JSON.parse(localStorage.getItem('operations'));
  }

  return operations;
}

export default getOperationsLocalStorage;
