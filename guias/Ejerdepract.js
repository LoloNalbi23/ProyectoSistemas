size = 50
let btagrandar;
let btachicar;

function setup() {
createCanvas(windowWidth,windowHeight);
background(0);

btagrandar = createButton('agrandar');
btagrandar.position(10, 200);
btagrandar.mousePressed(agrandar);

btachicar = createButton('achicar');
btachicar.position(10, 300);
btachicar.mousePressed(achicar);

}
function draw() {
    fill(0,0,255)
    ellipse(windowWidth/2, windowHeight/2, size, size);

}
function agrandar(){
    size+=10
}

function achicar(){
    if(size === 0) {

    } else{
        background(0);
        size-=10
    }
}