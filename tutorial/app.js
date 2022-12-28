const h1 = document.querySelector("div.hello h1")

function handleTitleClick() {
    if (h1.className === "active") {
        h1.className = ""
    }  else {
        h1.className = "active"
    }
}

h1.addEventListener("click", handleTitleClick)