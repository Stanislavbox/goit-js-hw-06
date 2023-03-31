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