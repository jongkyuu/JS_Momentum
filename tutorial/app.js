const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");  
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSumit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem("username", username)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoad() {
    const username = localStorage.getItem('username')
    if ( username != null) {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
}

loginForm.addEventListener("submit", onLoginSumit);  
window.addEventListener("load", onLoad)
