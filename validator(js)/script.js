const form = document.getElementById('registrationForm');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  errorMsg.textContent = '';
  successMsg.textContent = '';

  if (username === '') {
    errorMsg.textContent = 'Username is required.';
    return;
  }

  if (!validateEmail(email)) {
    errorMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = 'Password must be at least 6 characters.';
    return;
  }

  successMsg.textContent = 'Registration successful!';
});

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
