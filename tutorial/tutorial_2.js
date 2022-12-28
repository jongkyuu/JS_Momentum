// const title = document.getElementById("title")

// const hellos = document.getElementsByClassName("hello")

// const title = document.getElementsByTagName("h1")

const title = document.querySelector("div.hello:first-child h1")

let textColor = "black"
title.style.color = textColor;


function handleTitleClick() {
    const currentColor = title.style.color;
    let newColor;
    
    if (currentColor === "black")
    {
        newColor = "blue";
    } else if (currentColor === "blue") {
        newColor = "black"
    }
    title.style.color = newColor;
}

function handleMouseEnter(){
    console.log("mouse is entered")
    title.style.color = "red"
}

function handleMouseLeave(){
    console.log("mouse is leaved")
    title.style.color = textColor
}

function handleWindowResize(){
    console.log(window.outerWidth)
    if (window.outerWidth < 1500) {
        document.body.style.backgroundColor = "tomato"
    } else {
        document.body.style.backgroundColor = "beige"
    }
}

function handleWindowCopy() {
    alert("copier!")
}

function handleWindowOffline() {
    alert("no wifi")
}

function handleWindowOnline() {
    alert("on wifi")
}

title.addEventListener("click", handleTitleClick)
// title.addEventListener("mouseenter", handleMouseEnter)
// title.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)