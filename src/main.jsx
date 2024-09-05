import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkModeProvider from './context/DarkModeContext.jsx'
import CountryContextProvider from './context/CountryContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CountryContextProvider>
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
  </CountryContextProvider>
  </StrictMode>
)
