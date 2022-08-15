const loginButton: HTMLButtonElement = document.querySelector('#login-button')
const inputName: HTMLInputElement = document.querySelector('#name');
let userName:string = ''
loginButton.onclick = function(event){
    event.preventDefault;
    if (inputName.value.length > 0){
        userName = inputName.value;
        localStorage.setItem("name", userName);
        window.location.href = 'home.html'
    }
}