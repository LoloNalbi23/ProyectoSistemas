let matrix = [[2,2,4,5],[6,8,7,9],[3,1,5,3],[2,4,3,5]]
let acum = 0
let n = 2

function setup() {
for(let fila = 0;fila < matrix.length;fila++){
    for(let col = 0;col < matrix[0].length;col++){
    if(fila%n == 1){
        if(col%n == 0){
            acum += matrix[fila][col]
        }
    }
        }
    }
    console.log(acum);
}