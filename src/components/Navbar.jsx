import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">E-Cell</div>
        <button className="burger-icon" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/grid" onClick={toggleMenu}>Grid</Link>
          <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-PROFILE" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;