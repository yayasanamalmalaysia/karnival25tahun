import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import FunRunShirtPreorder from './FunRunShirtPreorder'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FunRunShirtPreorder />
  </StrictMode>,
)
