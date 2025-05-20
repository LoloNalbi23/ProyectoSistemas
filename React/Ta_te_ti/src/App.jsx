import { useState } from 'react'

function App() {
  const [arreglo, setArreglo] = useState([null,null,null,null,null,null,null,null,null])
  const [jugador1, setJugador1] = useState(true)
  const [jugar, setJugar] = useState(true)
  const [j1,setJ1] = useState("")
  const [j2,setJ2] = useState("")

  const turnodeJ1 = (event) => {
    setJ1(event.target.value);
  };

  const turnodeJ2 = (event) => {
    setJ2(event.target.value);
  };
  
  const jugando = (n) => {
    const newArreglo = [...arreglo]
    if(jugar){
      if(newArreglo[n]===null){
        if(jugador1){
          newArreglo[n] = 'x'
          setJugador1(false);
          console.log(n);
          console.log(newArreglo);
        } else {
          newArreglo[n] = 'o'
          setJugador1(true);
          console.log(n);
          console.log(newArreglo);
        }
      }
    }
    setArreglo(newArreglo)
    
    if(jugar){
      if((newArreglo[0]=='x' && newArreglo[1]=='x' && newArreglo[2]=='x')||
         (newArreglo[3]=='x' && newArreglo[4]=='x' && newArreglo[5]=='x')||
         (newArreglo[6]=='x' && newArreglo[7]=='x' && newArreglo[8]=='x')||
         (newArreglo[0]=='x' && newArreglo[3]=='x' && newArreglo[6]=='x')||
         (newArreglo[1]=='x' && newArreglo[4]=='x' && newArreglo[7]=='x')||
         (newArreglo[2]=='x' && newArreglo[5]=='x' && newArreglo[8]=='x')||
         (newArreglo[0]=='x' && newArreglo[4]=='x' && newArreglo[8]=='x')||
         (newArreglo[2]=='x' && newArreglo[4]=='x' && newArreglo[6]=='x')){
        console.log(`Felicitaciones, gano j1`)
        setJugar(false);
        ganaron(1)
    }
    if((newArreglo[0]=='o'&& newArreglo[1]=='o'&& newArreglo[2]=='o')||
       (newArreglo[3]=='o'&& newArreglo[4]=='o'&& newArreglo[5]=='o')||
       (newArreglo[6]=='o'&& newArreglo[7]=='o'&& newArreglo[8]=='o')||
       (newArreglo[0]=='o'&& newArreglo[3]=='o'&& newArreglo[6]=='o')||
       (newArreglo[1]=='o'&& newArreglo[4]=='o'&& newArreglo[7]=='o')||
       (newArreglo[2]=='o'&& newArreglo[5]=='o'&& newArreglo[8]=='o')||
       (newArreglo[0]=='o'&& newArreglo[4]=='o'&& newArreglo[8]=='o')||
       (newArreglo[2]=='o'&& newArreglo[4]=='o'&& newArreglo[6]=='o')){
        console.log(`Felicitaciones, gano j2`)
        setJugar(false);
        ganaron(0)
    }
    }
  }

  const reiniciar = () => {
    const newArreglo2 = [null,null,null,null,null,null,null,null,null]
    setArreglo(newArreglo2);
    setJugar(true)
  }

  const ganaron = (gn) => {
    if(gn == 1){
        swal.fire(`Que jugadooor ${j1}`)
    } 
    else {
        swal.fire(`Demuestre, ${j2} , demuestre`);
    }
  }

  return (
    <>
      <h1 className="title">Ta te ti</h1>
      <div className="contenedor">
      <h1>Turno de {j1}</h1>
      <div className="container">
          <div className="item1" onClick={()=>jugando(0)}>{arreglo[0]}</div>
          <div className="item2" onClick={()=>jugando(1)}>{arreglo[1]}</div>
          <div className="item3" onClick={()=>jugando(2)}>{arreglo[2]}</div>
          <div className="item4" onClick={()=>jugando(3)}>{arreglo[3]}</div>
          <div className="item5" onClick={()=>jugando(4)}>{arreglo[4]}</div>
          <div className="item6" onClick={()=>jugando(5)}>{arreglo[5]}</div>
          <div className="item7" onClick={()=>jugando(6)}>{arreglo[6]}</div>
          <div className="item8" onClick={()=>jugando(7)}>{arreglo[7]}</div>
          <div className="item9" onClick={()=>jugando(8)}>{arreglo[8]}</div>
        </div>
        <div class="input-container">
        <input class="input" name="text" type="text" placeholder="Nickname" value={j1} onChange={turnodeJ1}/>
        <input class="input" name="text" type="text" placeholder="Nickname" value={j2} onChange={turnodeJ2}/>
        </div>
      </div>
      <footer className="fin">
        Junta 3 en una linea o de esquina a esquina
      </footer>
      <div className="centrado">
        <button className="buttonn" onClick={()=>reiniciar()}>
          <span>REINICIAR</span>
        </button>
      </div>
    </>
  )
}

export default App
