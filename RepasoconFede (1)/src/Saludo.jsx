import { createElement, useState } from 'react'
import { Outlet } from 'react-router-dom';

function Saludo(){

return(
    <>
    <h1>Bienvenido a la lista del super</h1>
    <p>Esto te va a permitir anotar productos que debes comprar y los ya comprados</p>
    <p>    </p>
    <a href="inicio/pendientes">Pendientes</a>
    <a href="inicio/comprados">Comprados</a>

    <Outlet/>
    </>

)
}


export default Saludo