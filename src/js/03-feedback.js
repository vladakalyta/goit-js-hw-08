import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input'),
  textArea: document.querySelector('textarea'),
}

refs.form.addEventListener('input', throttle(onInputChange, 500))
refs.form.addEventListener('submit', onFormSubmit)

const DATA_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(DATA_KEY)) || {};
populateText()

function onInputChange(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(DATA_KEY, JSON.stringify(formData))
}

function onFormSubmit(event) {
  event.preventDefault();

  if (refs.emailInput.value === '' || refs.textArea.value === '') {
    return alert('Please enter your credential');
  }
  console.log(JSON.parse(localStorage.getItem(DATA_KEY)));
  event.currentTarget.reset()
  localStorage.removeItem(DATA_KEY);
}


function populateText() {
  const savedData = JSON.parse(localStorage.getItem(DATA_KEY));
  if (savedData) {
    if (savedData.message) {
      refs.textArea.value = savedData.message;
    }
    if (savedData.email) {
      refs.emailInput.value = savedData.email
    }
  }
}