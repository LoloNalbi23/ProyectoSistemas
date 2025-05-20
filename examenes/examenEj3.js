let img;
let index;
let r;
let g;
let b;
let gray;

function preload() {
img = loadimage('tu_imagen.jpg');
}

function setup() {
createCanvas(img.width, img.height);

image(img, 0, 0);

loadPixels();
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
        index = (x + y * width) * 4;
        r = pixels[index];
        g = pixels[index + 1];
        b = pixels[index + 2];
        gray = (r + g + b)/3;
        pixels[index] = gray;
        pixels[index + 1] = g;
        pixels[index + 2] = b;
        img.set(x,y,gray)
}
}
updatePixels();
}
