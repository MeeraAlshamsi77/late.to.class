var images = ["assets/one.jpg", "assets/two.jpg", "assets/three.jpg"];
var i = 0;

function changeImage() {
    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
    document.getElementById("behind").src = images[i];
}