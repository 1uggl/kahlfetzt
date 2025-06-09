import { useState } from 'react'
import './css/App.css'
import Navbar from './Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>HALLO</h1>
    </>
  )
}

export default App
