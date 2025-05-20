    let divcontenedor = document.getElementsByClassName("contenedor-principal")[0]
    let main = divcontenedor.getElementsByClassName("listado-viajes")[0]

    let precios = [];

    const agregar_viaje = (destino,duracion,precio,n) => {
    
    let nuevo_div = document.createElement("div")
    main.appendChild(nuevo_div)
    nuevo_div.classList.add("viaje")

    let nuevo_h2 = document.createElement("h2")
    nuevo_div.appendChild(nuevo_h2)
    nuevo_h2.textContent = destino

    let nuevo_p = document.createElement("p")
    nuevo_div.appendChild(nuevo_p)
    nuevo_p.textContent = `${duracion} días`

    let nuevo_p2 = document.createElement("p")
    nuevo_p2.textContent = `$${precio}`
    nuevo_div.appendChild(nuevo_p2)
    precios.push(precio)


    let nuevo_boton = document.createElement("button")
    nuevo_div.appendChild(nuevo_boton)
    nuevo_boton.textContent = "Agregar al carrito"
    nuevo_boton.addEventListener("click",() => alcarrito(n))
}

agregar_viaje("Tokio,Japón",7, 1200,0)
agregar_viaje("Buenos Aires,Argentina",8,800,1)
agregar_viaje("Roma,Italia",8,1500,2)

let divParis = main.getElementsByClassName("viaje")[0]
let boton1 = divParis.getElementsByTagName("button")[0]
boton1.addEventListener("click", () => mostrarduracion())

const mostrarduracion = () => {
    let elemp = divParis.getElementsByTagName("p")[0]
    duracion = parseInt(elemp.textContent.replace(" días",""))
    console.log(duracion)
}

const alcarrito = (n) => {
    let aside = divcontenedor.getElementsByClassName("carrito")[0]
    let p_carrito = aside.getElementsByTagName("span")[0]
    let preciocarrito = parseInt(p_carrito.textContent.replace("$",""))
    let preciofinal = preciocarrito + precios[n]
    p_carrito.textContent = `$${preciofinal}`
    console.log(p_carrito.textContent)
    }
