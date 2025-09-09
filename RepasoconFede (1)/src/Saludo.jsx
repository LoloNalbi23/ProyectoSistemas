import { createElement, useState } from 'react'
import './lista_super.css';
import { NavLink, Outlet } from 'react-router-dom';

function Saludo() {
    const [lista, setLista] = useState([])
    return (
        <><div id="saludo">
            <h1 id='título'>Bienvenido a la lista del super</h1>
            <p id='subtitulo'>Esto te va a permitir anotar productos que debes comprar y los ya comprados</p>
            <p>    </p>
            <NavLink to={'/pendientes'}> Pendientes </NavLink>
            <p>    </p>
            <NavLink to={'/comprados'}>Comprados</NavLink >
            <Outlet context={[lista,setLista]} />
        </div>
        </>
    )
}


export default Saludo