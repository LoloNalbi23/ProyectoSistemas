let section = document.getElementById("productos")
let producto1 = document.getElementById("product1")
let producto2 = document.getElementById("product2")
let producto3 = document.getElementById("product3")

let imagen1 = producto1.getElementsByTagName("img")[0]
let imagen2 = producto2.getElementsByTagName("img")[0]
let imagen3 = producto3.getElementsByTagName("img")[0]

imagen1.src = "https://acdn-us.mitiendanube.com/stores/001/291/743/products/afamessiblackcampeon11c265dd5b393e9d072b1671836016587710241024-5e11337768098a5fa617020669596569-1024-1024.webp"
imagen2.src = "https://levis.com.au/cdn/shop/files/levis-womens-94-baggy-jeans-A35100028_16_LE_FV_new_18de6842-445c-4acf-bc88-686663490386_3558X2000.progressive.jpg?v=1731599636"
imagen3.src = "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-showtheway-2-0-negra-30349332-100010gy6348001-1.jpg"

precio_zps = producto3.getElementsByTagName("p")[0].textContent
console.log(precio_zps)

let nombre1 = producto1.getElementsByTagName("h3")[0].textContent
let nombre2 = producto2.getElementsByTagName("h3")[0].textContent
let nombre3 = producto3.getElementsByTagName("h3")[0].textContent

let productos = [nombre1,nombre2,nombre3]
console.log(productos)

function crearnuevo (link,nombre,precio) {
    //creo div
    let fede_nuevo = document.createElement("div")
    section.appendChild(fede_nuevo)
    fede_nuevo.classList.add("producto")
    //creo imagen
    let fede_imagen = document.createElement("img")
    fede_nuevo.appendChild(fede_imagen)
    fede_imagen.src = link
    //creo nombre
    let fede_nombre = document.createElement("h3")
    fede_nuevo.appendChild(fede_nombre)
    fede_nombre.textContent = nombre
    //creo precio
    let fede_precio = document.createElement("p")
    fede_nuevo.appendChild(fede_precio)
    fede_precio.classList.add("precio")
    fede_precio.textContent = `$${precio}`
    //creo boton
    let fede_boton = document.createElement("button")
    fede_nuevo.appendChild(fede_boton)
    fede_boton.classList.add("agregar-carrito")
    fede_boton.textContent = "Agregar al carrito"
}
crearnuevo("https://acdn-us.mitiendanube.com/stores/001/642/173/products/buzo-hoodie-puma-francia11-e2ee4f9c42b8cf49e816621306345556-1024-1024.jpg","Buzo Azul",20000);
crearnuevo("https://acdn-us.mitiendanube.com/stores/001/836/967/products/remeraf1pistas_19-94e781a0a53cf0b98c16939479589512-1024-1024.jpeg","Remera de F1",15000);
crearnuevo("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXilpKXHajSsxJ7Dpg3tMbiOgTYsmoUIDfA&s","Campera de Ferrari",25000);
crearnuevo("https://tequierofashion.com/cdn/shop/products/product-image-593478842_1024x1024.jpg?v=1571720325","Lentes de sol",5000);




























const agregaralcarrito = () => {
    let elem_carrito = document.getElementById("carrito")
    let span_carrito = elem_carrito.getElementsByTagName("span")[0]
    let pcarrito = parseInt(span_carrito.textContent.replace("$","")) //$0 = texto

    let p_producto = producto1.getElementsByTagName("p")[0]
    let precioproducto = parseInt(p_producto.textContent.replace("$",""))

    span_carrito.textContent = `$${pcarrito+precioproducto}`
    console.log(span_carrito.textContent)
}
let boton1 = producto1.getElementsByTagName("button")[0]
boton1.addEventListener("click", () => agregaralcarrito())
//Hacerlo con todos los botones y reemplazar variables


const agregaralcarrito1 = () => {
    let elem_carrito = document.getElementById("carrito")
    let span_carrito = elem_carrito.getElementsByTagName("span")[0]
    let pcarrito = parseInt(span_carrito.textContent.replace("$","")) //$0 = texto

    let p_producto = producto1.getElementsByTagName("p")[0]
    let precioproducto = parseInt(p_producto.textContent.replace("$",""))

    span_carrito.textContent = `$${pcarrito+precioproducto}`
    let descuento = (precioproducto*0.8)
    console.log(descuento)
}


    const catalogo = [
        {
        ropa: "Remera",
        talle: "M",
        precio: 7500,
        desc: "Remera de algodón estampada de Colapa.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gh80eE_Sm47_BRAWAQg-ILJIQDQzzG8GPQ&s",
        },
        {
        ropa: "Pantalón",
        talle: "L",
        precio: 12000,
        desc: "Pantalón de Mercedes.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GlX3FFoDnpmx8NhRj_AjeNfuz7PUUj5-IA&s",
        },
        {
        ropa: "Campera",
        talle: "XL",
        precio: 23000,
        desc: "Campera impermeable con capucha desmontable.",
        img: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-abrigo-con-capucha-nylon-mujer-gris-722021217411002-1.jpg",
        
        },
        {
        ropa: "Buzo",
        talle: "S",
        precio: 9500,
        desc: "Buzo de frisa liviana de Colapa.",
        img: "https://acdn-us.mitiendanube.com/stores/001/291/743/products/f1-williams-racing-team-2-7ae926e87e25fc1a7d17260797229594-1024-1024.jpg",
        
        },
        {
        ropa: "Short",
        talle: "M",
        precio: 6200,
        desc: "Short deportivo de F1.",
        img: "https://images.footballfanatics.com/formula-1-merchandise/formula-1-primary-logo-sweat-short-black_ss5_p-202401207+u-fmz1qtascid4p9ji0bm2+v-d3skomjtin6jbbyhip2k.jpg?_hv=2&w=400",
        
        }
    ];
    function objetos (catalogo,n) {
        //creo div
        let fede_nuevo = document.createElement("div")
        section.appendChild(fede_nuevo)
        fede_nuevo.classList.add("producto")
        //creo imagen
        let fede_imagen = document.createElement("img")
        fede_nuevo.appendChild(fede_imagen)
        fede_imagen.src = catalogo[n].img
        //creo nombre
        let fede_nombre = document.createElement("h3")
        fede_nuevo.appendChild(fede_nombre)
        fede_nombre.textContent = catalogo[n].ropa
        //creo precio
        let fede_precio = document.createElement("p")
        fede_nuevo.appendChild(fede_precio)
        fede_precio.classList.add("precio")
        fede_precio.textContent = `$${catalogo[n].precio}`
        //creo talle
        let fede_talle = document.createElement("h2")
        fede_nuevo.appendChild(fede_talle)
        fede_talle.textContent = catalogo[n].talle
        //creo descripcion
        let fede_desc = document.createElement("p")
        fede_nuevo.appendChild(fede_desc)
        fede_desc.textContent = catalogo[n].desc
        //creo boton
        let fede_boton = document.createElement("button")
        fede_nuevo.appendChild(fede_boton)
        fede_boton.classList.add("agregar-carrito")
        fede_boton.textContent = "Agregar al carrito"
    }

    for (let n = 0; n < catalogo.length; n++) {
        objetos(catalogo,n)
    }