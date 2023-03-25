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
   
    // вариант 2
    // const box = document.createElement('div')
    // box.style.width = `${30 + i * 10}px`;
    // box.style.height = `${30 + i * 10}px`;
    // box.style.backgroundColor = getRandomHexColor();
    // boxesEl.appendChild(box);
  }
}

function destroyBoxes(){
    boxesEl.innerHTML = '';
    inputEl.value = '';
  }

//   Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.