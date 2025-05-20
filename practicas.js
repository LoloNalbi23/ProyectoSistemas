//Ejercicio 1
const primo = (n) => {
    for(i=2;i<n;i++){
        if(n%i===0){
            console.log("No es primo");
            return true;
        }
    }
    console.log("Es primo");
    return false;
}

let n = 29;
primo(n);









//Ejercicio 2
let arreglo = [4,7,2,8,1,5,10,6];
console.log(arreglo.reduce((n,n1)=>n + n1));















//Ejercicio 3
let index = [2,5,7,3,7,9,3,7,1,6,0,9,7,68,7];
let v = 7;
let contador = 0;
const cantdev = () => {
    for(i=0;i<=index.length;i++){
        if(index[i]==v){
            contador++
        }
    }
    console.log(contador);
}
cantdev();









//Ejercicio 4
let arr = [3,6,7,4,1,9,10,60];
console.log(arr.map((n)=>n*5));













//Ejercicio 5
let num = 13;
let arreglox = [1,7,3,8,23,9,4,7,100,10,40,69,73];
console.log(arreglox.filter((n)=>n<num));


let matrix = [[2,3],[4,5]]
for(i=0;i<=matrix.lenght;i++){
    for(j=0;j<matrix[i].lenght;j++){
        
    }
}






//Ejercicio 6
//Implementar una función que tome como parámetros dos arreglos de 2x2 
// (es decir, 2 matrices 2x2) y devuelva la suma de ambas matrices.

let matriz2 = [[4,5],
               [3,4]]
let matriz3 = [[1,1],
               [1,1]]
let matriz4 = [[0,0],
               [0,0]]

function sumamatriz(){
    for(let i=0;i < matriz2.length;i++){
        for(let j=0;j < matriz2[1].length ;j++){
            matriz4[i][j] = matriz2[i][j] + matriz3[i][j]
        }
    }
    console.log(matriz4);
}
sumamatriz();


















//Ejercicio 7
//Implementar una función que tome como parámetros dos arreglos de 3x3
//  (es decir, matrices de 3x3) y devuelva la multiplicación de ambas matrices.
let matriz5 = [[4,4,4],
               [5,5,5],
               [6,6,6]]
let matriz6 = [[2,2,2],
               [2,2,2],
               [2,2,2]]
let matrizvacia = [[0,0,0],
                   [0,0,0],
                   [0,0,0]]

const multi = (m1, m2) => {
    for(let i=0;i < 3;i++){
        for(let j=0;j < 3 ;j++){
            for(let z=0; z < 3; z++){
                matrizvacia[x][y] += m1[x][k] * m2[k][y]
            }
        }
    }
    console.log(matrizvacia);
    
}








//Ejercicio 8
//Declarar un arreglo de objetos representando estudiantes con nombre y nota. 
// Mostrar los nombres de los que aprobaron (nota ≥ 6).
let quinto = [{nombre:"Juan",nota:8},
              {nombre:"Lisando",nota:9},
              {nombre:"Martin",nota:4},
              {nombre:"Jose",nota:5}]
let aprobados = [];
quinto.filter((n)=>n.nota>=6).map((e)=>aprobados.push(e.nombre))
console.log(aprobados);










//Ejercicio 9
//Utilizar el arreglo creado en el punto anterior 
// para modificar las notas de aquellos estudiantes desaprobados a 6.
let sexto = [{nombre:"Juan",nota:8},
            {nombre:"Lisando",nota:9},
            {nombre:"Martin",nota:4},
            {nombre:"Jose",nota:5}]
sexto.filter((a)=>a.nota<=6).map((n)=>n.nota=6);
console.log(sexto);
