import { createElement, useState } from 'react'


function Lista_super() {
const [id, setId] = useState(1)
const [name, setName] = useState("")
const [price, setPrice] = useState(0)
const [cat, setCat] = useState("")
const [lista, setLista] = useState([])
    
    const obtenername = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }
    const obtenerprice = (e) => {
        setPrice(parseFloat(e.target.value))
        console.log(parseFloat(e.target.value))
    }
    const obtenercat = (e) => {
        setCat(e.target.value)
        console.log(e.target.value)
    }
    const añadir = (e) => {
        e.preventDefault()
        let newArreglo = {Id: id , nombre:name , precio:price, categoría:cat, comprado:false}
        setLista([...lista,newArreglo])
        setId(id+1)
        console.log(...lista,newArreglo)
    }
    const eliminar = (elemento) => {
        setLista(lista.filter((v)=>{v.Id==!elemento}))
    }
    const comprar = (elemento) => {
        setLista()
    }
return (
    <>
    <form action="submit" onSubmit={añadir}>
        
        <div>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name" placeholder="Nombre de producto" required onInput={obtenername}></input>
        </div>
        
        <div>
            <label htmlFor="price">Precio: </label>
            <input type="number" id="price" placeholder="Precio de producto" min="1" required onInput={obtenerprice}></input>
        </div>

        <div>
            <label htmlFor="cat">Categoría: </label>
        <select name="categoria" id="cat" onInput={obtenercat}>
            <option value="verduras">Verduras</option>
            <option value="frutas">Frutas</option>
            <option value="carne">Carnes</option>
            <option value="lacteos">Lacteos</option>
            <option value="bebidas">Bebidas</option>
            <option value="snacks">Snacks</option>
            <option value="limpieza">Limpieza</option>
            <option value="otros">Otro</option>
        </select>
        <button type="submit">Agregar</button>
        </div>
        </form>
        
        {lista.map((n)=> <div id="Producto">
            <p>{n.nombre}</p>
            <p>{n.precio}</p>
            <p>{n.categoría}</p>
            <p>{n.Id}</p>
            <button onClick={()=>comprar(n.Id)}>Comprar</button>
            <button onClick={()=>eliminar(n.Id)}>Eliminar</button>
            </div>)}
        
    </>
)
}

export default Lista_super