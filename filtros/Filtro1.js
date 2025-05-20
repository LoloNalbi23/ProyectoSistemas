let img;
let colorPixel;
let brillo;
let nuevoColor;

function preload(){
img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgGZb_QyF2xvL82SdGFt2VxeziOR5nr6GunHwujTWGQ&s');
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(100);

image(img, 0, 0);

for (let pixelX = 0; pixelX < img.width; pixelX++) {
for (let pixelY = 0; pixelY < img.height; pixelY++) {
colorPixel = img.get(pixelX, pixelY);
brillo = brightness(colorPixel);


if (brillo < 99) {
nuevoColor = 0;
} else {
nuevoColor = 255;
}

img.set(pixelX, pixelY, nuevoColor);
}
}

img.updatePixels();

}

function draw() {
image(img, 0, 0);
}