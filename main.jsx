import React from 'react'
import ReactDOM from 'react-dom/client'
import Rout from './Rout'
import { BrowserRouter } from "react-router-dom"
import './Menu.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Rout />
  </BrowserRouter>
  </React.StrictMode>,
)
