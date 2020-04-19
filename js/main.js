const hamburger = document.getElementById('hamburger');
const navUL = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('header__menu--show');
});

/***************************************************** */

const counter = document.querySelector('.header__counter');
localStorage.setItem('counter', localStorage.getItem('counter') || 0);
localStorage.setItem(
  'checkOut',
  localStorage.getItem('checkOut') || JSON.stringify(new Array())
);

initCounter();

function initCounter() {
  counter.setAttribute('data-value', localStorage.getItem('counter'));
}
