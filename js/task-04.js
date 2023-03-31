
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', decrementClick);
incrementBtnEl.addEventListener('click', incrementClick);

let counterValue = 0;

function decrementClick(){
      counterValue -= 1;
      valueEl.textContent = counterValue;
};

function incrementClick(){
      counterValue += 1;
     valueEl.textContent = counterValue;
};

