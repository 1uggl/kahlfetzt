import './css/Navbar.css' 
import { NavLink, Link } from 'react-router'
import logo from './assets/logo_schwarz.png'
import facebook from './assets/facebook.png'
import email from './assets/email.png'
import instagram from './assets/instagram.png'

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/"><img src={logo} alt="logo"/></Link>
      <ul className="navigation-links">
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
          to='/members'
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
        Mitgliederbereich</NavLink></li>
      </ul>
      <ul className="social-media-contacts">
      <li><a target="_blank" href="https://www.instagram.com/kahl_fetzt/"><img src={instagram} alt="instagram" /></a></li>
      <li><a target="_blank" href="https://www.facebook.com/kahlfetzt/"><img src={facebook} alt="facebook" /></a></li>
      <li><a href="mailto:kahl-fetzt@gmx.de"><img src={email} alt="email"/></a></li>
      </ul>
    </div>
  )
}
