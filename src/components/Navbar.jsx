import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <nav className="container navbar-inner">

        <NavLink to="/" className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.jpg`} alt="Gym Power Flex" width="48" height="48" />
          <span className="nav-brand">POWER<em>FLEX</em></span>
        </NavLink>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {[
            { to: '/',         label: 'Inicio'   },
            { to: '/planes',   label: 'Planes'   },
            { to: '/clases',   label: 'Clases'   },
            { to: '/contacto', label: 'Contacto' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <NavLink to="/contacto" className="gym-btn">Únete ahora</NavLink>
          
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menú"
          >
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
          </button>
        </div>

      </nav>
    </header>
  )
}