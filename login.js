document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    function validateLogin(callback) {
      if (username === 'admin' && password === '12345') {
        callback(true);
      } else {
        callback(false);
      }
    }
  
    validateLogin(function(isValid) {
      if (isValid) {
        alert('Login Successful!');
        window.location.href = 'main.html';
      } else {
        alert('Invalid Credentials');
      }
    });
  });