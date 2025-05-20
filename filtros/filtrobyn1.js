let img;
let colorPixel = 0;
let rojo = 0;
let azul = 0;
let verde = 0;
let nuevoColor = 0;
let gris;

function preload(){
img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgGZb_QyF2xvL82SdGFt2VxeziOR5nr6GunHwujTWGQ&s');
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(100);

for (let pixelX = 0; pixelX < img.width; pixelX++) {
for (let pixelY = 0; pixelY < img.height; pixelY++) {
colorPixel = img.get(pixelX, pixelY);
rojo = colorPixel[0];
verde = colorPixel[1];
azul = colorPixel[2];

gris = (rojo * 0.299 + verde * 0.587 + azul * 0.114);

img.set(pixelX, pixelY, gris);
}
}

img.updatePixels();

}

function draw() {
image(img, 0, 0);
}
