let img;
let prom = 0;
let rep;
let fila;
let col;
let colorPixel = 0;
let aux = 0;
let size = 2;
let cordfila = 0;
let cordcol = 0;
let num = 0;
let auxi = 0;


function preload() {
    img = loadImage('https://png.pngtree.com/png-clipart/20190604/original/pngtree-car-sets-png-image_1291357.jpg');
}

function setup() {
createCanvas(windowWidth, windowHeight);

background(100);
auxi = size;

image(img, 0, 0);

rep = (img.width * img.height) / (size**2)

img.loadPixels();

while(aux < rep){
    for(fila = cordfila;fila < auxi ;fila++){
        for(col = cordcol;col < size;col++){
            colorPixel = img.get(fila,col);
            //calculando la suma
            prom += colorPixel
        }
    }
    if(cordcol > img.width){
    cordcol = 0;
    cordfila+=size
    }
    prom / 4
    aux++;
    num += 2;
    cordcol += size;
    auxi += size + num;

    fill(prom);
    square(fila -= 1,col -= 1,size);

    prom = 0;
    }
}

function draw() {

}