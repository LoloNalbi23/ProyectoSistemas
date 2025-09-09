import { createElement, useState } from 'react'
import './lista_super.css';
import { useOutletContext } from 'react-router-dom';
function Item(){
    const [lista, setLista] = useOutletContext()

    const eliminarl = (idojt) => {
        setLista(lista.filter((v) => v.Id != idojt))
        console.log(lista.filter((v) => v.Id !== idojt))
    }
return(
    <>
    <h1 className='títulos'>Productos pendientes</h1>
            {(lista.filter((v) => v.comprado)).map((p) => {
                return (
                    <div>
                        <div id="Producto">
                            <p>{p.name}</p>
                            <p>{p.price}</p>
                            <p>{p.cat}</p>
                            <button onClick={() => eliminarl(p.Id)}>Eliminar</button>
                        </div>
                    </div>
                )
            })}
    </>

)
}


export default Item