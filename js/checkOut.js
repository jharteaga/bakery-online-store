import bakeryImgs from '../assets/img/bakery/*.jpg';
import drinksImgs from '../assets/img/drinks/*.jpg';
import { substractCounter } from './utils';
import toastr from 'toastr';

const checkout = document.querySelector('.checkout__body');

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

init();

function init() {
  addCheckout();
  let removeBtns = document.querySelectorAll('.checkout__remove');
  let trashBtns = document.querySelectorAll('.checkout__trash');
  addRemoveEvents(removeBtns);
  addRemoveEvents(trashBtns);
}

function addCheckout() {
  let output = '';
  const products = JSON.parse(localStorage.getItem('checkOut'));
  if (products.length > 0) {
    products.forEach((item, i) => {
      output += `
        <tr class="table-responsive-sm">
            <td><img src="${
              item.type === 'bakery'
                ? bakeryImgs[item.image]
                : drinksImgs[item.image]
            }" alt="Product Image" /></td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
              <i id="${i}" class="checkout__trash fas fa-trash-alt"></i>
              <button id="${i}" class="btn btn-sm btn-danger checkout__remove">Remove</button>
            </td>
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
      list.splice(btn.id, 1);
      localStorage.setItem('checkOut', JSON.stringify(list));
      substractCounter();
      toastr.error('Your item was removed from the cart.', 'Removed');
      init();
    });
  });
}
