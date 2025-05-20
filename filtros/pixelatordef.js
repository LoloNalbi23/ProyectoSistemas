let img;
let fila = 0;
let col = 0;
let filaux = 0;
let colaux = 0;
let size = 2;
let aux = 0;
let rep = 0;
let auxf = 0;
let auxc = 0;
let colorPixel;
let prom = 0;

function preload() {
    img = loadImage('https://http2.mlstatic.com/D_NQ_NP_889329-MLA45348240830_032021-O.webp');
}

function setup() {
    createCanvas(img.width, img.height);
    
    background(100);
    
    filaux = size;
    colaux = size;

    image(img, 0, 0);
    
    rep = (img.width * img.height) / (size**2);
    
    img.loadPixels();

    while(aux < rep){
        for(fila = auxf;fila < filaux ;fila++){
            for(col = auxc;col < colaux;col++){
                colorPixel += img.get(fila,col);
                
            }
        }
        prom = colorPixel / 4;
        fill(prom);
        square(fila -= 1,col -= 1,size);
        auxc += size;
        colaux += size;
        if(auxc < img.width + 1){
        auxf += size;
        filaux += size;
        }
}


img.updatePixels();
}
function draw(){
    image (img,0,0);
}