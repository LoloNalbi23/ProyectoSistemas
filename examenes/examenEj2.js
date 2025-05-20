let checkboxE;
let checkboxR;
let checkboxS;
let buttonD;

function setup() {
createCanvas(windowWidth,windowHeight);
background (0);

buttonD = createButton('Dibujar');
buttonD.position(20,100);

checkboxE = createCheckbox();
checkboxE.position(20,200);

checkboxR = createCheckbox();
checkboxR.position(20,220);

checkboxS = createCheckbox();
checkboxS.position(20,240);

}
function draw (){
    fill(255,255,0);
    rect (0,0,200,windowHeight);
    buttonD.mousePressed(Figura);
}
function Figura(){
if (checkboxE.checked()) {
    fill(random(255),random(255),random(255));
    ellipse(random(windowWidth),random(windowHeight),70);
} else {
    
}
if (checkboxR.checked()) {
    fill(random(255),random(255),random(255));
    rect(random(windowWidth),random(windowHeight),80,40);
} else {
    
}
if (checkboxS.checked()) {
    fill(random(255),random(255),random(255));
    square(random(windowWidth),random(windowHeight),70);
} else {
    
}
}