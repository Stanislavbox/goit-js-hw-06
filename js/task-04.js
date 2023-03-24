
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


// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

