const images = ["0.jpg", "1.jpg", "2.jpg","3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
document.body.style.backgroundImage= `url(img/${chosenImage})`;
bgImage.style.backgroundSize = "cover";
bgImage.style.backgroundPosition = "center center";
bgImage.style.backgroundRepeat = "no-repeat";