import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
