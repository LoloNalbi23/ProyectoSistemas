let form = document.getElementById("formulario")
let input_inicio = document.getElementById("inicio")
let input_final = document.getElementById("final")
let divisiones = document.getElementById("puntos")
let select = document.getElementById("selector")
let pi = Math.PI
let funcionelegida = "sin"
let eje_x = []
console.log(eje_x)




let text_cant_pt = document.getElementById("dots");
divisiones.addEventListener("input", () => {
    cantidad_puntos = parseInt(divisiones.value);
    text_cant_pt.textContent = `${cantidad_puntos}`;
});

let text_cant_a = document.getElementById("cant");
let cant_a = document.getElementById("a")
cant_a.addEventListener("input", () => {
    cantidad_a = parseInt(cant_a.value);
    text_cant_a.textContent = `${cantidad_a}`;
});

function miFuncion1(x, tipo){
    if(tipo === "sin"){
        funcionelegida = "sin"
        return cantidad_a*(Math.sin(x))
    } else if(tipo === "cos"){
        funcionelegida = "cos"
        return cantidad_a*(Math.cos(x))
    } else if(tipo === "tg"){
        funcionelegida = "tan"
        return cantidad_a*(Math.tan(x))
    }
}
form.addEventListener("submit", (e) => {
    
    e.preventDefault()
    //agarro los input
    let puntos = parseInt(divisiones.value)
    let inicio = parseFloat(parseFloat(input_inicio.value)*pi.toFixed(2))
    let final = parseFloat(parseFloat(input_final.value)*pi.toFixed(2))

    //Cada cuanto va un punto
    let valor = (final-inicio)/(puntos-1)

    //Genero los puntos
    eje_x = [inicio]
    for(let i=1;i<puntos;i++){
        let punto = i*valor
        punto = parseFloat(punto.toFixed(2))
        eje_x.push(punto)
    }

    console.log(eje_x)
    form.remove()
    
    let grafica = `f(x)=${cantidad_a}${funcionelegida}(x)`
    //Graficar funcion
    const data = {
    type: 'line',
    data: {
        labels: eje_x ,
        datasets: [{
        label: `${grafica}`,
        data:  eje_x.map(x => miFuncion1(x,select.value)),
        fill: true,
        borderColor: 'rgb(9, 43, 192)',
        borderWidth: 2,
        tension: 0.2
        }
    ]
    }
};
const canva = document.getElementById("grafico")
window.miFuncion1 = new Chart(canva,data)
})