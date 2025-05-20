let matrix = [[4,7,2,9],[1,2,5,4],[3,6,8,10],[4,8,5,7]]
let acum = 0

function setup() {
    background(200);
    for(let filas = 0;filas < 4;filas++){
    for(let col = 0;col < 4;col++){
        acum += matrix[filas][col];
}
}
console.log(acum);
textSize(100);
text(acum, 50, 50);
}
