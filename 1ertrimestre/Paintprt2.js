let sliderSize
let sliderRed
let sliderGreen
let sliderBlue
let buttonClearall
let Pincel_color

function setup() {
createCanvas(windowWidth,windowHeight)
background(0)

sliderSize = createSlider(10, 120);
sliderSize.position(30, 40);
sliderSize.size(100);

sliderRed = createSlider(0, 255);
sliderRed.position(30, 100);
sliderRed.size(100);

sliderGreen = createSlider(0, 255);
sliderGreen.position(30, 120);
sliderGreen.size(100);

sliderBlue = createSlider(0, 255);
sliderBlue.position(30, 140);
sliderBlue.size(100);


buttonClearall = createButton("Clear all");
buttonClearall.position(20 , 300);
buttonSave = createButton("Save");
buttonSave.position(20 , 600);
}

function draw() {
fill(255,255,51)
rect(0,0,200,windowHeight)

fill(sliderRed.value(),sliderGreen.value(),sliderBlue.value())
square(160,0,40)

Pincel_color=(sliderRed.value(),sliderGreen.value(),sliderBlue.value())

textSize(30);
fill(255,0,0)
text('Red:'+sliderRed.value(), 20, 200);

textSize(30);
fill(0,255,0)
text('Green:'+sliderGreen.value(), 20, 230);

textSize(30);
fill(0,0,255)
text('Blue:'+ sliderBlue.value(), 20, 260);

buttonClearall.mousePressed(() => {
console.log("entroClearall");
background(0)
});
buttonSave.mousePressed(() => {
saveCanvas();
});

}
function mouseDragged() {
    noStroke()
    fill(sliderRed.value(),sliderGreen.value(),sliderBlue.value())
    ellipse(mouseX,mouseY,sliderSize.value())
    }

let buttonGoma
buttonGoma = createButton("Goma");
buttonGoma.position(20 , 280);
buttonGoma.mousePressed(() => {
    console.log("entroGoma");
    Pincel_color = color(0,0,0)
    });