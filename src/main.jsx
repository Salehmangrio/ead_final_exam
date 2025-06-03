import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TrafficLightSimulator from './TrafficLightSimulator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrafficLightSimulator />
  </StrictMode>,
)
