import { createElement, useState } from 'react'
import './lista_super.css';
import Item from './Item.jsx'

function Lista_super() {
const [id, setId] = useState(0)
const [lista, setLista] = useState([])
const [producto, setProducto] = useState({
    name:"",
    price:0,
    cat:"",
    comprado:false
})
    
    const obtener = (e) => {
        const {name, value} = e.target
        setProducto({...producto,[name] : value})
        console.log({...producto,[name] : value})
    }
    const añadir = (e) => {
        e.preventDefault()
        let newArreglo = {Id: id , nombre:producto.name , precio:producto.price, categoría:producto.cat, comprado:false}
        setLista([...lista,newArreglo])
        setId(id+1)
        console.log(...lista,newArreglo)
    }
    const eliminarl = (idojt) => {
        setLista(lista.filter((v)=>v.Id!=idojt))
        console.log(lista.filter((v)=>v.Id!==idojt))
    }
    const comprar = (id) => {
        const nuevosProductos = lista.map((p) => {
        if (p.Id === id) {
        return { ...p, comprado: true }
        }
        return p
        })
        console.log(nuevosProductos)
        setLista(nuevosProductos)
    }
return (
    <>
    <form action="submit" onSubmit={añadir}>
        
        <div>
            <label htmlFor="name">Nombre: </label>
            <input type="text" name="name" placeholder="Nombre de producto" required onInput={obtener}></input>
        </div>
        
        <div>
            <label htmlFor="price">Precio: </label>
            <input type="number" name="price" placeholder="Precio de producto" min="1" required onInput={obtener}></input>
        </div>

        <div>
            <label htmlFor="cat">Categoría: </label>
        <select name="cat" id="cat" onInput={obtener}>
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

        {(lista.filter((v)=>!v.comprado)).map((p) =>
        <Item
            key={p.Id}
            id={p.Id}
            name={p.nombre}   
            price={p.precio}
            categoria={p.categoría} 
            comprado={p.comprado}
            comprar={comprar}
            eliminar={eliminarl}
        />
        )} 

        {(lista.filter((v)=>v.comprado)).map((p) => 
        <Item
            key={p.Id}
            id={p.Id}
            name={p.nombre}
            price={p.precio}
            categoria={p.categoría}
            comprado={p.comprado}
            comprar={comprar}
            eliminar={eliminarl}
        />
        )}
            
            </>
)
}

export default Lista_super