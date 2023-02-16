const images = [
    "0.jpeg", "1.jpeg", "2.jpeg",
]

function todayImage() {
    const image = images[Math.floor(Math.random() * images.length)];
    console.log(image);

    const bgImage = document.createElement("img");
    console.log(bgImage);
    bgImage.src = `image/${image}`;

    document.body.appendChild(bgImage);
}

todayImage(); 