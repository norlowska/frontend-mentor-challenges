const form = document.getElementById('signup-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const firstName = form['first-name'];
  const firstNameError = document.getElementById('first-name-error');
  const lastName = form['last-name'];
  const lastNameError = document.getElementById('last-name-error');
  const email = form['email'];
  const emailError = document.getElementById('email-error');
  const password = form['password'];
  const passwordError = document.getElementById('password-error');

  checkRequired(firstName, firstNameError);
  checkRequired(lastName, lastNameError);
  checkRequired(password, passwordError);
  checkRequired(email, emailError);

  validateEmail(email, emailError);
});

function showError(inputElement, errorMessage) {
  inputElement.classList.add('form__input--invalid');
  errorMessage.classList.remove('hidden');
}

function hideError(inputElement, errorMessage) {
  if (inputElement.classList.contains('form__input--invalid')) {
    inputElement.classList.remove('form__input--invalid');
  }
  errorMessage.classList.add('hidden');
}

function checkRequired(inputElement, errorMessage) {
  if (inputElement.value.trim() === '') {
    showError(inputElement, errorMessage);
  } else {
    hideError(inputElement, errorMessage);
  }
}

function validateEmail(emailInput, emailError) {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(emailInput.value)) {
    showError(emailInput, emailError);
  } else {
    hideError(emailInput, emailError);
  }
}
