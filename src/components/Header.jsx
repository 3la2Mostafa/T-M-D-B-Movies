import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage, useLanguageDispatch } from '../context/LanguageContext'

const Header = () => {

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior
    const searchValue = e.target.elements.search.value
    console.log('Search value:', searchValue)
  }

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
        <img src="../../public/assets/images/navLogo.png" alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} />

      </nav>
    </>
  )
}

export default Header