import { createElement, useState } from 'react'
import './lista_super.css';
import { useOutletContext } from 'react-router-dom';

function Lista_super() {
    const [id, setId] = useState(0)
    const [lista, setLista] = useOutletContext()
    const [producto, setProducto] = useState({
        name: "",
        price: 0,
        cat: "",
        comprado: false
    })

    const obtener = (e) => {
        const { name, value } = e.target
        setProducto({ ...producto, [name]: value })
        console.log({ ...producto, [name]: value })
    }
    const añadir = (e) => {
        e.preventDefault()
        let newArreglo = { Id: id, name: producto.name, price: producto.price, cat: producto.cat, comprado: false }
        setLista([...lista, newArreglo])
        setId(id + 1)
        console.log(lista)
    }
    const eliminarl = (idojt) => {
        setLista(lista.filter((v) => v.Id != idojt))
        console.log(lista.filter((v) => v.Id !== idojt))
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
            <h1 className='títulos'>Productos pendientes</h1>
            {(lista.filter((v) => !v.comprado)).map((p) => {
                console.log(p.name);
                
                return (
                    <div>
                        <div id="Producto">
                            <p>{p.name}</p>
                            <p>{p.price}</p>
                            <p>{p.cat}</p>
                            <button className="btncompra" onClick={() => comprar(p.Id)}>Comprar</button>
                            <button onClick={() => eliminarl(p.Id)}>Eliminar</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Lista_super