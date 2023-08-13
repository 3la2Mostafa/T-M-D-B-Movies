import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  px-4" style={{backgroundColor:'#191970'}}>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ justifyContent: 'space-between' }}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-light">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favorites" className="nav-link text-light">
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
        <img src="https://o.remove.bg/downloads/4f26f96e-082e-40ef-8dba-9517682b0484/navLogo-removebg-preview.png" alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} />

      </nav>
    </>
  )
}

export default Header
