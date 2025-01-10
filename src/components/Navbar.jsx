// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Food Explorer</Link>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className="navbar-item">Home</Link>
          </li>
          <li>
            <Link to="/AboutPage" className="navbar-item">About</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-item">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

