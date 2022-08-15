const loginButton = document.querySelector('#login-button');
const inputName = document.querySelector('#name');
let userName = '';
loginButton.onclick = function (event) {
    event.preventDefault;
    userName = inputName.value;
    console.log(userName);
    localStorage.setItem("name", userName);
    window.location.href = 'home.html';
};
