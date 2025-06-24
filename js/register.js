document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;
  const error = document.getElementById('registerError');
  const success = document.getElementById('registerSuccess');

  error.textContent = '';
  success.textContent = '';

  if (password !== confirm) {
    error.textContent = 'Les mots de passe ne correspondent pas.';
    return;
  }

  success.textContent = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
});
