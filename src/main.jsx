import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { ResultContextProvider } from './context/ResultContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResultContextProvider>
    <Router>
      <App />
    </Router>
    </ResultContextProvider>
    
    
  </React.StrictMode>,
)
