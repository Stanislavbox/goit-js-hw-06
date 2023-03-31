
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event){
      
      event.preventDefault();
      const{email, password} = event.currentTarget.elements



      const data = {
            email: email.value,
            password: password.value.trim()
      };

      if (!data.email || !data.password) {
            alert('Bсе поля должны быть заполнены!');
            return;
      }

      console.log(data)
      formEl.reset();
}