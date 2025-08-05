let form = document.getElementById("form")
let cuenta = document.getElementById("cuenta")
let porcentaje = document.getElementById("porcentaje")
let prop = document.getElementById("prop")
let total = document.getElementById("total")
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let prtj = parseFloat(porcentaje.value)
    let valor = parseFloat(cuenta.value)
    let propina = valor * prtj
    let suma = valor + propina 
    console.log(propina)
    prop.textContent = `Propina: ${propina}`
    total.textContent = `Total con propina: ${suma}`
})