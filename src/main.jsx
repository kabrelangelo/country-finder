import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountryContextProvider from './context/CountryContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <CountryContextProvider>
    <App />
  </CountryContextProvider>
  </BrowserRouter>
  </StrictMode>
)
