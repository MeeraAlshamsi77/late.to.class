console.log("Arrow image slider loaded!");

const images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];
let i = 0;

function showImage() {
  const img = document.getElementById("behind");
  if (img) img.src = images[i];
}

function nextImage() {
  i = (i + 1) % images.length;
  showImage();
}

function prevImage() {
  i = (i - 1 + images.length) % images.length;
  showImage();
}

document.addEventListener("DOMContentLoaded", () => {
  showImage();

  document.getElementById("nextButton").addEventListener("click", nextImage);
  document.getElementById("prevButton").addEventListener("click", prevImage);
});

