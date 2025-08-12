import { useState } from 'react'


function Tiro() {
  const [ang, setAng] = useState(0)
  const [vel, setVel] = useState(25)
  const [alc, setAlc] = useState(0)
  const [g, setG] = useState(9.81)
  const [pi, setPi] = useState(Math.PI)

  const obtenerang = (e) => {
    setAng(parseFloat(e.target.value))
  }
  const obtenervel = (e) => {
    setVel(parseFloat(e.target.value))
  }
  const alcanzame = (e) => {
    e.preventDefault()
    setAlc(((vel * vel / g) * Math.sin (2 * (ang*pi)/180)).toFixed(3))
  }
  return (
    <>
    <form action="submit" onSubmit={(e)=>{alcanzame(e)}}>

      <label htmlFor="a">Ángulo:</label>
      <input type="number" id="a" placeholder="En grados bobolón" min="1" max="90" required onInput={obtenerang}></input>

      <label htmlFor="v">Velocidad: {vel}</label>
      <input type="range" min="1" max="50" id="v" required onInput={obtenervel}></input>

      <button type="submit">Calcular</button>
      </form>
    <h2 id="prop">Alcance {alc}</h2>
    </>
  )
}

export default Tiro
