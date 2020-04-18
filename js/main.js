const hamburger = document.getElementById('hamburger');
const navUL = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('header__menu--show');
});
