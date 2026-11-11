const button = document.querySelector('button');
const nam = document.querySelector('.name');
const namError = document.querySelector('.name-error');
const email = document.querySelector('.email');
const emailError = document.querySelector('.email-error');
const password = document.querySelector('.password');
const passwordError = document.querySelector('.password-error');
const confirm = document.querySelector('.confirm-password');
const confirmError = document.querySelector('.confirm-password-error');
const identicalError = document.querySelector('.identical-error');

button.addEventListener('click', function (e) {
  e.preventDefault();

  if (nam.value.length === 0) {
    namError.classList.add('show-error');
  } else {
    namError.classList.remove('show-error');
  }

  if (email.value.length === 0) {
    emailError.classList.add('show-error');
  } else {
    emailError.classList.remove('show-error');
  }

  if (password.value.length === 0) {
    passwordError.classList.add('show-error');
  } else if (password.value !== confirm.value) {
    identicalError.classList.add('show-error');
    passwordError.classList.remove('show-error');
  } else {
    passwordError.classList.remove('show-error');
    identicalError.classList.remove('show-error');
  }

  if (confirm.value.length === 0) {
    confirmError.classList.add('show-error');
    confirmError.innerText = 'password field cannot be empty';
  } else {
    confirmError.classList.remove('show-error');
  }
});
