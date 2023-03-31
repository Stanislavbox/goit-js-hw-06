function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onClick);

function onClick(){

let color = getRandomHexColor();

document.body.style.backgroundColor = color;
spanEl.textContent = color;
}