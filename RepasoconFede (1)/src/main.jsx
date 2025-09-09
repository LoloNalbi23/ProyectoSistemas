import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Lista_super from './Lista_super.jsx'
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom'
import Saludo from './Saludo.jsx'
import Item from './Item.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Saludo />}>
        <Route path='pendientes' element={<Lista_super />}/>
        <Route path='comprados' element={<Item/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
