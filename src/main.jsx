import React from "react"
import ReactDOM from 'react-dom/client'
import './css/index.css'
import './css/responsive.css'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.jsx'
import Notfound from './Notfound.jsx'
import Blog from './Blog.jsx'

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
)
