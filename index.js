const btnTheme = document.querySelector('#theme');
const containerPhone = document.querySelector('.phone');
const containerAll = document.querySelector('.container');

btnTheme.addEventListener('click', changeTheme);

function changeTheme(){
  containerPhone.classList.toggle('theme-dark');
  containerAll.classList.toggle('gradient-dark');

  if(containerPhone.classList.contains("theme-dark")){
    this.classList.replace("bx-sun", "bx-moon");
  }else {
    this.classList.replace("bx-moon","bx-sun");
  }
}

console.log(btnTheme)