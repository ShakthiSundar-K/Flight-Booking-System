const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.sign-in-form');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginMessage = document.getElementById('loginMessage');
    const loginError = document.getElementById('loginError');

    const dummyUsername = 'shakthi';
    const dummyPassword = 'password';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameField.value;
        const password = passwordField.value;

        if (username === dummyUsername && password === dummyPassword) {
            loginMessage.textContent = 'Login successful!';
            loginError.textContent = '';
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('username', username);
            setTimeout(function() {
                window.location.href = '../index.html';
            }, 1000); // 1 second delay to show the message
        } else {
            loginError.textContent = 'Invalid username or password. Please try again.';
            loginMessage.textContent = '';
        }
    });
});

