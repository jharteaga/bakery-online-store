import bakeryData from '../assets/data/bakery.json';
import images from '../assets/img/bakery/*.jpg';
import { addCounter, addCheckOut } from './utils';
import toastr from 'toastr';

const bakeryContainer = document.querySelector('.bakery');

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: false,
  positionClass: 'toast-bottom-full-width',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '2000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

addBakery();

//Add information to every bakery card
function addBakery() {
  let output = '';
  bakeryData.forEach((bakery) => {
    output += `
        <div class="bakery__box" id="${bakery.id}">
        <img
          src="${images[bakery.image]}"
          alt="Dessert Image"
          class="bakery__img"
        />
        <h4 class="bakery__name">${bakery.name}</h4>
        <p class="bakery__description">
          ${bakery.description}
        </p>
        <div class="bakery__row">
          <span class="bakery__price">$${bakery.price}</span>
          <span class="bakery__cart"><i class="fas fa-cart-plus"></i></span>
        </div>
      </div>`;
  });

  bakeryContainer.innerHTML = output;
}

const bakeryCarts = document.querySelectorAll('.bakery__cart');

//Add event listeners
bakeryCarts.forEach((cart) => {
  cart.addEventListener('click', () => {
    let item = bakeryData.filter(
      (bakery) => bakery.id === cart.parentElement.parentElement.id
    );
    addCheckOut(item[0]);
    addCounter();
    toastr.success('Check your cart.', 'Product added');
  });
});
