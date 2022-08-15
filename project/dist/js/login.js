const loginButton = document.querySelector('#login-button');
const inputName = document.querySelector('#name');
let userName = '';
loginButton.onclick = function (event) {
    event.preventDefault;
    if (inputName.value.length > 0) {
        userName = inputName.value;
        localStorage.setItem("name", userName);
        window.location.href = 'home.html';
    }
};
