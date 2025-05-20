import { useState } from 'react'

function App() {
  const [post, setPost] = useState()
  const [intentos, setIntentos] = useState(0)
  const [recompensa, setRecompensa] = useState(100)
  const [jugar, setJugar] = useState(false)

const empezar = () => {
    let p = Math.random()*100
    p = Math.floor(p)
    if(p>24){
      p=12   /*Aca hice que si se pasa de 24 se vuelva 12, porque al multiplicarlo por 100, me iban a dar numeros muy grandes, entonces
      si bien en promedio es lo que mas va a salir, no supe como resolverlo
      */
    }
    setPost(p)
    setJugar(true)
      console.log("post es igual a" + post);
      console.log("int es igual a" + intentos);
      console.log("recomp es igual a" + recompensa);
}

  const jugando = (n) => {
    if(jugar){
      if(n==post){
        //pintar de verde
        swal.fire("Felicidades, encontraste el tesoro, aquí tienes tu recompensa:" + recompensa + "tus intentos:" + intentos)
        setJugar(false)
        console.log("n es igual a" + n);
        console.log("post es igual a" + post);
      }
      else{
        //pintar de rojo
        swal.fire("Casii, ahí no es, busquemos un poco más (Se te ha restado 10 a tu recompensa)")
        setIntentos(intentos+1)
        setRecompensa(recompensa-10)
        console.log("n es igual a" + n);
        console.log("post es igual a" + post);
      }
    }
    }
    

  const reiniciar = () => {
    let p = Math.random()*100
    p = Math.floor(p)
    if(p>24){
      p=12
    }
    setPost(p)
    setRecompensa(100)
    setJugar(true)
  }

  return (
    <>
      <h1 className="title">Busqueda del tesoro</h1>
      <div className="centrado">
        <button onClick={()=>empezar()} className="button">Empezar</button>
      </div>
      
      <div className="container">
          <div className="item1" onClick={()=>jugando(0)}></div>
          <div className="item2" onClick={()=>jugando(1)}></div>
          <div className="item3" onClick={()=>jugando(2)}></div>
          <div className="item4" onClick={()=>jugando(3)}></div>
          <div className="item5" onClick={()=>jugando(4)}></div>
          <div className="item6" onClick={()=>jugando(5)}></div>
          <div className="item7" onClick={()=>jugando(6)}></div>
          <div className="item8" onClick={()=>jugando(7)}></div>
          <div className="item9" onClick={()=>jugando(8)}></div>
          <div className="item10" onClick={()=>jugando(9)}></div>
          <div className="item11" onClick={()=>jugando(10)}></div>
          <div className="item12" onClick={()=>jugando(11)}></div>
          <div className="item13" onClick={()=>jugando(12)}></div>
          <div className="item14" onClick={()=>jugando(13)}></div>
          <div className="item15" onClick={()=>jugando(14)}></div>
          <div className="item16" onClick={()=>jugando(15)}></div>
          <div className="item17" onClick={()=>jugando(16)}></div>
          <div className="item18" onClick={()=>jugando(17)}></div>
          <div className="item19" onClick={()=>jugando(18)}></div>
          <div className="item20" onClick={()=>jugando(19)}></div>
          <div className="item21" onClick={()=>jugando(20)}></div>
          <div className="item22" onClick={()=>jugando(21)}></div>
          <div className="item23" onClick={()=>jugando(22)}></div>
          <div className="item24" onClick={()=>jugando(23)}></div>
          <div className="item25" onClick={()=>jugando(24)}></div>
        </div>
        <div className="centrado">
        <button className="button" onClick={()=>reiniciar()}>REINICIAR
        </button>
      </div>
      <div className="centrado">
        <footer>
        Encuentra el tesoro y gana una recompensa
        </footer>
      </div>
    </>
  )
}

export default App
