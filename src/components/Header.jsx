// Header.jsx
import React from 'react';
import '../style/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Food Explorer</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/favorites">Favorites</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
