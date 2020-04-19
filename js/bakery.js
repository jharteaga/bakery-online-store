import bakeryData from '../assets/data/bakery.json';
import images from '../assets/img/bakery/*.jpg';
import { addCounter, addCheckOut } from './utils';

const bakeryContainer = document.querySelector('.bakery');

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
  });
});
