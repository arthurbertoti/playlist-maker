const loginButton: HTMLButtonElement = document.querySelector('#login-button')
const inputName: HTMLInputElement = document.querySelector('#name');
let userName:string = ''
loginButton.onclick = function(event){
    event.preventDefault;
    userName = inputName.value;
    console.log(userName);
    localStorage.setItem("name", userName);
    window.location.href = 'home.html'
}