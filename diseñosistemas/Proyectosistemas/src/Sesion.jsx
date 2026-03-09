import { useState } from 'react'
import './App.css'

export default function App() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [mail, setMail] = useState("")

  const iniciar = () => {
    if(mail.endsWith("@alumnos.itr.edu.ar")){
      
    }
  }

  const hch = (e) => {
    const { name, value } = e.target; 
    set[name](value)
  }
  return (
    <>
      <div>
        <img src="" alt="" />
        <h1>Inicio de sesión</h1>
        
        <h2>Bienvenido</h2>
        <p>Inicia sesión con tu cuenta institucional del colegio</p>
        
        <label htmlFor="name">Nombre</label>
        <input id='name' name="name"  type="text" onInput={(e)=>hch}/>
        <label htmlFor="surname">Apellido</label>
        <input id='surmane' name="surname" type="text" onInput={(e)=>hch}/>
        <label htmlFor="mail">Correo Electrónico</label>
        <input id='mail' name="mail" type="text" onInput={(e)=>hch}/>

        <p>
          Usá tu cuenta institucional.
          No se permiten sesiones múltiples.
        </p>
        <button onClick={iniciar}>Iniciar sesión</button>
      </div>
    </>
  )
}

