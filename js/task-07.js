const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')

inputEl.addEventListener('input', onNumberEvent);

function onNumberEvent(event){
      
      textEl.style.fontSize = `${event.currentTarget.value}px`;
}