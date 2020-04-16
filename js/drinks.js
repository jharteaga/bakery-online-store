import drinksData from '../assets/data/drinks.json';
import images from '../assets/img/drinks/*.jpg';

const drinksContainer = document.querySelector('.drinks');

const addDrinks = () => {
  let output = '';
  drinksData.forEach((drink) => {
    output += `
        <div class="drinks__box">
        <img
          src="${images[drink.image]}"
          alt="Dessert Image"
          class="drinks__img"
        />
        <h4 class="drinks__name">${drink.name}</h4>
        <p class="drinks__description">
          ${drink.description}
        </p>
        <div class="drinks__row">
          <span class="drinks__price">$${drink.price}</span>
          <span class="drinks__cart"><i class="fas fa-cart-plus"></i></span>
        </div>
      </div>`;
  });

  drinksContainer.innerHTML = output;
};

addDrinks();
