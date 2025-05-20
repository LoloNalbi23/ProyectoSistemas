let newR;
let newG;
let newB;
let img;
function preload() {

    img = loadImage('https://media.lmneuquen.com/p/edcf05988b9488a0c16afa706a90f56f/adjuntos/195/imagenes/007/569/0007569650/770x0/smart/argentina-seleccion-basquet-campazzopng.png');

}
function setup() {

    createCanvas(img.width, img.height);

    for(let pixelX = 0; pixelX < img.width ; pixelX++){
        for(let pixelY = 0; pixelY < img.height ; pixelY++){
            let c1 = img.get (pixelX, pixelY); //Casilla 
            let R = c1[0]; //Rojo es el 0 de la casilla
            let G = c1[1]; //Verde es el 1 de la casilla
            let B = c1[2]; //Azul es el 2 de la casilla
            let newR = 0.393 * R + 0.769 * G + 0.189 * B //Nuevo Rojo
            let newG = 0.349 * R + 0.686 * G + 0.168 * B //Nuevo Verde
            let newB = 0.272 * R + 0.534 * G + 0.131 * B //Nuevo azul
            let promedio = [0, 0, 0, 0] //Asignamos nuevo promedio
            promedio[0] = newR //El rojo toma el valor nuevo
            promedio[1] = newG //El verde toma el valor nuevo
            promedio[2] = newB //El azul toma el valor nuevo
            promedio[3] = 100  //Asignamos alpha
            img.set(pixelX, pixelY, promedio); //Asignamos al pixel esa imagen
            updatePixels; //Actualizamos pixeles
        }

    }

}



function draw(){

    image(img, 0, 0);

}