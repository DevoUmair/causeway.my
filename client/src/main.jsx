import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CausewayMyContextProvider from './context/CausewayMyContextProvider.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import CausewayHqContextProvider from './context/CausewayHqContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <CausewayMyContextProvider>
        <CausewayHqContextProvider>
            <App />
        </CausewayHqContextProvider>
      </CausewayMyContextProvider>
    </Router>
  </StrictMode>,
)
