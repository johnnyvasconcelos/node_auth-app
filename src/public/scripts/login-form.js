const button = document.querySelector('button');
const email = document.querySelector('.email');
const emailError = document.querySelector('.email-error');
const password = document.querySelector('.password');
const passwordError = document.querySelector('.password-error');

button.addEventListener('click', function (e) {
  e.preventDefault();

  validate(email, emailError);
  validate(password, passwordError);
});

// function - validate the inputs

function validate(input, error) {
  if (input.value.trim() === '') {
    error.classList.add('show-error');

    return false;
  } else {
    error.classList.remove('show-error');

    return true;
  }
}
