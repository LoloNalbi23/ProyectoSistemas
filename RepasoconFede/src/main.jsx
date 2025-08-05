import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Propinas from './Propinas.jsx'
import Tiro from './Tiro.jsx'
import Lista_super from './Lista_super.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Propinas />
    <Tiro />
    <Lista_super />
  </StrictMode>,
)
