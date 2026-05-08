import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameScore from './GameScore.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
       <GameScore/>
  </StrictMode>,
)
