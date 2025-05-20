import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(5)
  const [input1, setInput1] = useState("")
  const [mostra, setMostra] = useState(false)

  return (
    <>
    <div>

    </div>
    {/* Ejercicio 1 */}
      {/* <div>
      <h1>
      la cuenta es {count}
        </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Incrementar
        </button>
      </div> */}


      {/* Ejercicio 2 */}
      {/* <div>
        <input type="text"
        value={input1} 
        onChange={(v)=> setInput1(v.target.value)}
        />
      <button onClick={() => mostra==true?setMostra(false):setMostra(true)}>
        Mostrar
      </button>
      <h3>{mostra && input1}</h3>
      </div> */}




      {/* Ejercicio 3 */}
      <div>
      <input type="number" value={input} onChange={(a) => setInput(a.target.value)}/>
        <h1>
          {input*2}
        </h1>
      </div>
      
    </>
  )
}

export default App
