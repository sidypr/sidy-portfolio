import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle scroll lorsque le menu mobile est ouvert/fermé
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  // Ferme le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-info">
          <span className="navbar-location">Basé à Paris, France</span>
          <a href="mailto:sidy.djimbira@gmail.com" className="navbar-email">sidy.djimbira@gmail.com</a>
        </div>
        <nav className="navbar-nav">
          <ul className="navbar-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projets</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>À propos</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
          <button 
            className={`navbar-toggle ${isOpen ? 'is-active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu de navigation"
          >
            <span className="navbar-toggle-icon"></span>
          </button>
        </nav>
      </div>
      <div className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-links">
          <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projets</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>À propos</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar; 