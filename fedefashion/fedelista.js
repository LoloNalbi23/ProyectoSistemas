const creartarea = () => {
    let hacer = document.getElementById("tareaInput").value
    console.log(hacer)
    if(hacer ==! ""){
        // crear li
    let tarea = document.createElement("li")
    tarea.classList.add("tarea")
    tarea.textContent = hacer
    document.getElementsByTagName("ul")[0].appendChild(tarea)
    // crear span
    let span = document.createElement("span")
    span.textContent = "Tarea a realizar"
    tarea.appendChild(span)
    // crear boton
    let boton = document.createElement("button")
    boton.classList.add("eliminar")
    boton.textContent = "Eliminar"
    boton.addEventListener("click", () => tarea.remove())
    tarea.appendChild(boton)
    } else {
        document.getElementById("tareaInput").value= "Coloca una tarea"
    }
}
let boton1 = document.getElementById("agregarBtn")
boton1.addEventListener("click", () => creartarea())