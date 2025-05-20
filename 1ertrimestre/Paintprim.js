let slider
let Pincel_color = 0
let buttonRojo
let buttonVerde
let buttonAzul
let buttonAmarillo
let buttonBorrador
let buttonClearall

function setup () {
createCanvas(windowWidth, windowHeight)
background(0)

slider = createSlider(10 , 150);
slider.position(20 , 70);
slider.size(50);

buttonRojo = createButton("Rojo");
buttonRojo.position(20 , 100);
buttonVerde = createButton("Verde");
buttonVerde.position(20 , 120);
buttonAzul = createButton("Azul");
buttonAzul.position(20 , 140);
buttonAmarillo = createButton("Amarillo");
buttonAmarillo.position(20 , 160);
buttonBorrador = createButton("Borrador");
buttonBorrador.position(20 , 180);
buttonClearall = createButton("Clear all");
buttonClearall.position(20 , 200);
}

function draw () {
    buttonRojo.mousePressed(() => {
    console.log("entroRojo");
    Pincel_color = color(255,0,0)
    });

    buttonVerde.mousePressed(() => {
        console.log("entroVerde");
        Pincel_color = color(0,255,0)
        });

    buttonAzul.mousePressed(() => {
    console.log("entroAzul");
    Pincel_color = color(0,0,255)
        });
    buttonRojo.mousePressed(() => {
        console.log("entroAmarillo");
        Pincel_color = color(255,255,51)
        });
    buttonBorrador.mousePressed(() => {
        console.log("entroBorrador");
        Pincel_color = color(0,0,0)
        });
    buttonClearall.mousePressed(() => {
        console.log("entroClearall");
        background(0)
        });
}
function mouseDragged() {
    noStroke();
    fill(Pincel_color)
    ellipse(mouseX, mouseY, slider.value());
    }