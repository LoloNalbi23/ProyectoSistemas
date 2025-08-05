let form = document.getElementById("form")
let angulo = document.getElementById("angulo")
let velocidad = document.getElementById("velocidad")
let h3 = document.getElementById("alcance")
let altura_inicial = document.getElementById("alt")
let desplazamiento_horizontal = document.getElementById("dist")
let pi = Math.PI
let g = 9.81
let calculo = false

let vspan = document.getElementById("vspan")
let valor = 1
velocidad.addEventListener("input", () => {
    valor = parseFloat(velocidad.value)
    vspan.textContent = `${valor}`
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let grados = parseFloat(angulo.value)
    let radianes = (grados*pi)/180
    let v = parseFloat(velocidad.value)
    let alcance = (v**2/g)*Math.sin(2*radianes)
    h3.textContent = `Alcance final : ${alcance} metros`
    calculo = true
})

velocidad.addEventListener("input", ()=> {
    if(calculo){
        let dist0 = parseFloat(desplazamiento_horizontal.value)
        let alt0 = parseFloat(altura_inicial.value)
        let grados = parseFloat(angulo.value)
        let radianes = (grados*pi)/180
        let v = parseFloat(velocidad.value)
        let v_y = v * Math.sin(radianes)
        let v_x = v * Math.cos(radianes)
        let t = (vy + Math.sqrt(v_y * v_y + 2 * g * alt0))
        let alcance = dist0 + (v_x * t)
        h3.textContent = `Alcance final : ${alcance} metros`
    }
})