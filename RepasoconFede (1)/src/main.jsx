import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Propinas from './Propinas.jsx'
import Tiro from './Tiro.jsx'
import Lista_super from './Lista_super.jsx'
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom'
import Saludo from './Saludo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path='/inicio' element={<Saludo />}>
        <Route path='/pendientes' element={<Lista_super />}/>
        <Route path='/comprados' element={sip}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
