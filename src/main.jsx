import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { ContextProvider } from './store/ContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      {/* <BrowserRouter> */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
      {/* </BrowserRouter> */}
    </ContextProvider>
  </React.StrictMode>
)
