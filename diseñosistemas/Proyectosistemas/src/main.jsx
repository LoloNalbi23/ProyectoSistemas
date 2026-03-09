import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Sesion />}>
        <Route path='inicio' element={<InicioA />}>
          <Route path='personalizar' element={<PersonalizarA/>}/>
          <Route path='asistencia' element={<Asistencia/>}/>
          <Route path='justificar_falta' element={<Falta/>}/>
        </Route>
        <Route path='inicio' element={<InicioP />}>
          <Route path='personalizar' element={<PersonalizarP/>}/>
          <Route path='asistencia' element={<Sancion/>}/>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
