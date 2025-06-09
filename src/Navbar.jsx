import './css/Navbar.css' 
import { Link } from 'react-router'
import logo from './assets/logo_schwarz.png'

export default function Navbar() {
  return (
  <div className="Navbar">
      <Link to="/"><img src={logo} alt="logo"/></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Intern</Link></li>
        <li><Link to="/">Kontakt</Link></li>
        <li><Link to="/about">Über uns</Link></li>
      </ul>
  </div>
  )
}
