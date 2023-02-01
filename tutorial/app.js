const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");  

const link = document.querySelector("a")

function onLoginSumit(event) {
    event.preventDefault();
    console.log(event);
    const username = loginInput.value;
    console.log(username);
}

function onClickLink(event) {
    event.preventDefault();
    console.dir(event)
    console.log("링크 클릭")
}

loginForm.addEventListener("submit", onLoginSumit);  
link.addEventListener("click", onClickLink)