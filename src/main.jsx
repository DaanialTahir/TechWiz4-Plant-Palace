import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvier from './components/context/context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvier children={<App />} />
   
  </React.StrictMode>,
)
