const inputNameEl = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output')

inputNameEl.addEventListener('input', onInputEvent);

function onInputEvent(event){
      if(event.currentTarget.value.trim() !== ''){
            spanNameEl.textContent = event.currentTarget.value;
      }else{
            spanNameEl.textContent = 'Anonymous';
      }
}

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>