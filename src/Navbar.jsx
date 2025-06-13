import './css/Navbar.css' 
import { NavLink, Link } from 'react-router'
import logo from './assets/logo_schwarz.png'

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/"><img src={logo} alt="logo"/></Link>
      <ul>
        <li><NavLink 
          to="/"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          Home</NavLink></li>
        <li><NavLink
          to='/blog'
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
        Blog</NavLink></li>
        <li><NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
        Kontakt</NavLink></li>
        <li><NavLink
          to='/members'
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
        Mitgliederbereich</NavLink></li>
      </ul>
    </div>
  )
}
