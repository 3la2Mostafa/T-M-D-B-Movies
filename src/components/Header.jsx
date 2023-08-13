import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4" style={{ backgroundColor: '#191970' }}>
      <a className="navbar-brand" href="/">
        <img src="https://o.remove.bg/downloads/c6f4b112-7b94-40ed-9671-bfe8286b5ef1/navLogo-removebg-preview.png" alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{backgroundColor:'white',border:'0px'}}
      >
      <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
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
    </nav>
  );
};

export default Header;
