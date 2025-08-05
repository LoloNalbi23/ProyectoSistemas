import { useState } from 'react'


function Lista_super() {
const [ang, setAng] = useState(0)
const [vel, setVel] = useState(25)
    
return (
    <>
    <form action="submit" onSubmit={(e)=>{alcanzame(e)}}>

        <label htmlFor="id">ID: </label>
        <input type="number" id="id" placeholder="Id de producto" min="1" required onInput={obtenerid}></input>

        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" placeholder="Nombre de producto" required onInput={obtenername}></input>

        <label htmlFor="price">Precio: </label>
        <input type="number" id="price" placeholder="Precio de producto" min="1" required onInput={obtenerprice}></input>

        <label htmlFor="cat">Categoría: </label>
        <select name="categoria" id="cat">
            <option value="veg">Verduras</option>
            <option value="fru">Frutas</option>
            <option value="meet">Carnes</option>
            <option value="lact">Lacteos</option>
            <option value="drin">Bebidas</option>
            <option value="snac">Snacks</option>
            <option value="clean">Limpieza</option>
            <option value="other">Otro</option>
        </select>

        <button type="submit">Calcular</button>
    </form>
    <h2 id="prop">Alcance {alc}</h2>
    </>
)
}

export default Lista_super