import "react"
import { useState } from "react"

function Propinas() {
    const [precio, setPrecio] = useState(0)
    const [propina, setPropina] = useState(0.1)
    const [prop, setProp] = useState(0)
    const [total, setTotal] = useState(0)

    const calcular = (e) => {
        setPrecio(parseFloat(e.target.value))
    }

    const calcularr = (e) => {
        setPropina(parseFloat(e.target.value))
    }

    const totalprecio = () => {
        setProp(precio*propina)
        setTotal(precio + prop)

    }

    return(
        <>
        <form action="submit" onSubmit={(e)=>{e.preventDefault(),totalprecio()}}>
            <input type="number" id="cuenta" min="1" required onChange={calcular}></input>
            <select name="" id="Porcentaje" onChange={calcularr}>
            <option value="0.1">10%</option>
            <option value="0.15">15%</option>
            <option value="0.2">20%</option>
            <option value="0.25">25%</option>
        </select>
        <button type="submit">Calcular</button>
        </form>
        <h2 id="prop">Propina: ${prop}</h2>
        <h2 id="total">Total: ${prop + precio}</h2>
        </>
    )
}

export default Propinas