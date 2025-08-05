import "react"
import { useState } from "react"

function Noapp() {
    const [texto, setTexto] = useState("")

    const funcionDeCambio = (e) => {
        setTexto(e.target.value) //Es como un objeto, target es una propiedad de e, value una propiedad de target, y me va a dar lo que escribi en el input
        console.log(e.target.value)
        }

    return(
        <>
        <input type="text" onChange={funcionDeCambio}/>
        <p>{texto}</p>
        </>
    )
}