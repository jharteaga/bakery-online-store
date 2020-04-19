import bakeryImgs from '../assets/img/bakery/*.jpg';
import drinksImgs from '../assets/img/drinks/*.jpg';
import { substractCounter } from './utils';

const checkout = document.querySelector('.checkout__body');

init();

function init() {
  addCheckout();
  let removeBtns = document.querySelectorAll('.checkout__remove');
  if (removeBtns[0].style.display === 'none') {
    removeBtns = document.querySelectorAll('.checkout__trash');
  }
  addRemoveEvents(removeBtns);
}

function addCheckout() {
  let output = '';
  const products = JSON.parse(localStorage.getItem('checkOut'));
  if (products.length > 0) {
    products.forEach((item) => {
      output += `
        <tr class="table-responsive-sm">
            <td><img src="${
              item.type === 'bakery'
                ? bakeryImgs[item.image]
                : drinksImgs[item.image]
            }" alt="Product Image" /></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td><i id="${item.type}-${
        item.id
      }" class="checkout__trash fas fa-trash-alt"></i><button class="btn btn-sm btn-danger checkout__remove" id="${
        item.type
      }-${item.id}">Remove</button></td>
        </tr>        
        `;
    });
  } else {
    output += `
    <tr>
        <td class="checkout__empty" colspan="4">Cart Empty</td>
    </tr>        
    `;
  }

  checkout.innerHTML = output;
}

function addRemoveEvents(removeBtns) {
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const list = JSON.parse(localStorage.getItem('checkOut'));
      const [type, id] = btn.id.split('-');
      const newList = list.filter((item) => item.type == type && item.id == id);
      localStorage.setItem(
        'checkOut',
        JSON.stringify(
          list.filter(
            (item) => JSON.stringify(item) !== JSON.stringify(newList[0])
          )
        )
      );
      init();
      substractCounter();
    });
  });
}
