let form = document.getElementById("formulario")
let boton1 = document.getElementById("subir")
let input_inicio = document.getElementById("inicio")
let input_final = document.getElementById("final")
let divisiones = document.getElementById("puntos")
let funcion = document.getElementById("selector").value
let pi = Math.PI
let eje_x
boton1.addEventListener("submit", () => {
    inicio = input_inicio.value
    final = input_final.value
    eje_x = [inicio]
    console.log(eje_x)
    for(let i=1;i>=divisiones;i++){
        let punto = i*(inicio-final/divisiones-1)
        eje_x.push(punto)
    }
    eje_x.push(final)
    console.log(eje_x)
    form.remove()
})
console.log(eje_x)
function miFuncion1(x){
    return Math.funcion(x)
}
// const data = {
//     type: 'line',
//     data: {
//         labels: eje_x ,
//         datasets: [{
//         label: 'Coseno',
//         data:  eje_x.map(x => miFuncion1(x)),
//         fill: true,
//         borderColor: 'rgb(9, 43, 192)',
//         borderWidth: 2,
//         tension: 0.2
//         },{
//             label: 'Seno',
//             data:  eje_x.map(x => miFuncion2(x)),
//             fill: true,
//             borderColor: 'rgb(230, 6, 6)',
//             borderWidth: 2,
//             tension: 0.2  
//         }
//     ]
//     }
// };
// const canva = document.getElementById("grafico")
// window.miFuncion1 = new Chart(canva,data)