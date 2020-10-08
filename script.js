const images = [
  "20wharffront.png",
  "344queenfront.png",
  "baldhillsfront.png",
  "cablehutfront.png",
  "gpofront.png",
  "maroochydorefront.png",
  "windmillfront.png",
];
let currentImageIndex = 0;
console.log(images);

const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const img = document.querySelector("img");

prevButton.addEventListener("click", function () {
  currentImageIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  img.src = images[currentImageIndex];
});

nextButton.addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  img.src = images[currentImageIndex];
});

const darkLightButton = document.querySelector("#dark-light-button");
darkLightButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
