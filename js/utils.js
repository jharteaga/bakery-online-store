const counter = document.querySelector('.header__counter');

export function addCounter() {
  localStorage.setItem('counter', Number(localStorage.getItem('counter')) + 1);
  counter.setAttribute('data-value', localStorage.getItem('counter'));
}

export function substractCounter() {
  localStorage.setItem('counter', Number(localStorage.getItem('counter')) - 1);
  counter.setAttribute('data-value', localStorage.getItem('counter'));
}

export function addCheckOut(item) {
  const arrCheckOut = JSON.parse(localStorage.getItem('checkOut'));
  arrCheckOut.push(item);
  localStorage.setItem('checkOut', JSON.stringify(arrCheckOut));
}
