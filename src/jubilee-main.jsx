import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import JubileeStore from './JubileeStore'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JubileeStore />
  </StrictMode>,
)
