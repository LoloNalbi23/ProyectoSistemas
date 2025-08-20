import { createElement, useState } from 'react'

function Item({ id, name, price, categoria, comprado, eliminar, comprar }){

return(
    <>
    {!comprado ? (  //Fede, perdón pero este me ganó, no llegué con el tiempo y si se fija, ese operador terniario es de Chat GPT, disculpeme esta vez.
        <>
        <h1 className='títulos'>Productos pendientes</h1>
        <div id="Producto">
            <p>{name}</p>
            <p>{price}</p>
            <p>{categoria}</p>
            <p>{id}</p>
            <button className="btncompra" onClick={() => comprar(id)}>Comprar</button>
            <button onClick={() => eliminar(id)}>Eliminar</button>
        </div>
        </>
    ) : (
        <>
        <h1 className='títulos'>Productos comprados</h1>
        <div id="Producto">
            <p>{name}</p>
            <p>{price}</p>
            <p>{categoria}</p>
            <p>{id}</p>
            <button onClick={() => eliminar(id)}>Eliminar</button>
        </div>
        </>
    )}
    </>

)
}


export default Item