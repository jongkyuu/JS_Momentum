const API_KEY = "cd49a38353492df65662742b8339eec4";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`${lat} ${lon}`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const data = fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        const name = data.name;
        const weather = data.weather[0].main;
        weatherContainer.innerText = `${data.weather[0].main} / 기온 : ${data.main.temp}도`;
        cityContainer.innerText = data.name;
    }); 
}
    

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);