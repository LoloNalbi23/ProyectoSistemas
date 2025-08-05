let form = document.getElementById("form")
let input_inicio = document.getElementById("inicio")
let input_final = document.getElementById("final")
let divisiones = document.getElementById("puntos")
let select = document.getElementById("selector")
let periodo = document.getElementById("b")
let b = null
let angulo_de_fase = document.getElementById("c")
let c = null
let termino_independiente = document.getElementById("d")
let d = null
let pi = Math.PI
let funcionelegida = "sin"
let eje_x = []
console.log(eje_x);

let text_cant_pt = document.getElementById("dots");
divisiones.addEventListener("input", () => {
    cantidad_puntos = parseInt(divisiones.value);
    text_cant_pt.textContent = `${cantidad_puntos}`;
});

let text_cant_a = document.getElementById("cant");
let cant_a = document.getElementById("a")
let  a = 1
cant_a.addEventListener("input", () => {
    a = parseInt(cant_a.value);
    text_cant_a.textContent = `${a}`;
});

function miFuncion1(x,tipo,b,c,d){
    
    if(tipo === "sin"){
        funcionelegida = "sin"
        return a*(Math.sin((b*x)+c))+d
    } else if(tipo === "cos"){
        funcionelegida = "cos"
        return a*(Math.cos((b*x)+c))+d
    } else if(tipo === "tan"){
        funcionelegida = "tan"
        return a*(Math.tan((b*x)+c))+d
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(window.miFuncion){
        window.miFuncion.destroy()
    }
    //agarro los input
    let puntos = parseInt(divisiones.value)
    let inicio = parseFloat( (parseFloat(input_inicio.value) * pi).toFixed(2) );
    let final  = parseFloat( (parseFloat(input_final.value)  * pi).toFixed(2) );

    //Cada cuanto va un punto
    let valor = (final-inicio)/(puntos-1)

    //Genero los puntos
    eje_x = [inicio]
    console.log(eje_x);
    for(let i=1;i<puntos;i++){
        let punto = i*valor
        punto = parseFloat(punto.toFixed(2))
        eje_x.push(punto)
    }
    console.log(eje_x);
    b = parseFloat(parseFloat(periodo.value).toFixed(2))
    c = parseFloat(parseFloat(angulo_de_fase.value)*pi.toFixed(2))
    d = parseFloat(parseFloat(termino_independiente.value).toFixed(2))
    let color = document.getElementById("color").value
    let eje_y = eje_x.map(x => miFuncion1(x,select.value,b,c,d))
    let grafica = `f(x)=${cant_a.value}${funcionelegida}(${b}x+${c})+${d}`
    
    //Graficar funcion
    const data = {
    type: 'line',
    data: {
        labels: eje_x ,
        datasets: [{
        label: `${grafica}`,
        data:  eje_y,
        fill: true,
        borderColor: color,
        borderWidth: 2,
        tension: 0.2
        }
    ]
    }
};
const canva = document.getElementById("grafico")
window.miFuncion = new Chart(canva,data)
})