const btnTheme = document.querySelector('#theme');
const btnOpenHistory = document.querySelector('#open-h');
const btnCloseHistory = document.querySelector('#close-h');
const containerHistory = document.querySelector('.history');
const containerPhone = document.querySelector('.phone');
const containerAll = document.querySelector('.container');

console.log(btnCloseHistory)

btnTheme.addEventListener('click', changeTheme);
btnOpenHistory.addEventListener('click', openHistory);
btnCloseHistory.addEventListener('click', closeHistory);

function changeTheme(){
  containerPhone.classList.toggle('theme-dark');
  containerAll.classList.toggle('gradient-dark');

  if(containerPhone.classList.contains("theme-dark")){
    this.classList.replace("bx-sun", "bx-moon");
    this.title = "Theme Dark";
  }else {
    this.classList.replace("bx-moon","bx-sun");
    this.title = "Theme Light";
  }
}

function openHistory() {
  containerHistory.classList.add('open-history');
}
function closeHistory() {
  containerHistory.classList.remove('open-history');
}