const clock = document.querySelector("h2#clock")
// clock.innerText = "test"

function sayHello() {
    console.log("Hello");
}

function getClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const time = `${hours}:${minutes}:${seconds}`;
    clock.innerText = time;
}

// setInterval(() => {
//    sayHello(); 
// }, 5000);

// setInterval(sayHello, 1000);
getClock();
setInterval(getClock, 100);