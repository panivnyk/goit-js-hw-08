const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

console.log(email);
console.log(form);
console.log(message);
updateOutput();
form.addEventListener(
  'input',
  throttle(event => {
    saveMessage;
  }, 500)
);

function saveMessage(event) {
  event.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.email.value);
  updateOutput();
  form.reset();
}

function updateOutput() {
  email.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}
