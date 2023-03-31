function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes')


createBtnEl.addEventListener('click', createBoxes)
destroyBtnEl.addEventListener('click', destroyBoxes)
 
function createBoxes(){
  let amount = inputEl.value;
  for (let i = 0; i < amount; i += 1){
    let boxContainer = '';
    boxContainer += `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor()};"></div>`;
    boxesEl.insertAdjacentHTML('beforeend', boxContainer);
  }
}

function destroyBoxes(){
    boxesEl.innerHTML = '';
    inputEl.value = '';
  }