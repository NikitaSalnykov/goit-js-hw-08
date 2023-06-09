const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
}

const delay = require('lodash.throttle');

fillingFields() 

refs.form.addEventListener('input', delay((tracking), 500))

function tracking (event) {
 
  const formData = {
    emailData: refs.email.value,
    messageData: refs.message.value
  }
  
  localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}


refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  if (refs.email.value === null || refs.message.value === null || refs.email.value === '' || refs.message.value === '') {
    console.log(refs.email.value);
    alert('There are empty fields')
  } else {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    e.preventDefault()
    e.currentTarget.reset()
    localStorage.clear("feedback-form-state")
  }
}

function fillingFields() {

  let boofer = JSON.parse(localStorage.getItem("feedback-form-state"))
  if (boofer) {
    refs.email.value = boofer.emailData 
    refs.message.value = boofer.messageData 
  }

}