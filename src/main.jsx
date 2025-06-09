import React from "react"
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.jsx'
import About from './About.jsx'
import Navbar from './Navbar.jsx'

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)
