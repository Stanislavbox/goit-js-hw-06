const inputEl = document.querySelector('input');


inputEl.addEventListener('blur', onFocusEvent);
function onFocusEvent(event){

      if (event.currentTarget.value.trim().length >= Number (event.currentTarget.dataset.length) && event.currentTarget.value.trim() !== ''){
            event.currentTarget.classList.add('valid');
            event.currentTarget.classList.remove('invalid');
      }else{
            event.currentTarget.classList.add('invalid');
            event.currentTarget.classList.remove('valid');
      }
}