import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/', label: 'Accueil', match: (path) => path === '/' },
  { to: '/projects', label: 'Projets', match: (path) => path === '/projects' || path.startsWith('/projects/') },
  { to: '/about', label: 'À propos', match: (path) => path === '/about' },
  { to: '/contact', label: 'Contact', match: (path) => path === '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const isActive = (match) => match(location.pathname);
  const isDitherPage = location.pathname === '/' || location.pathname === '/contact';

  return (
    <header className={`navbar${isDitherPage ? ' navbar--on-dither' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-info">
          <span className="navbar-location">Paris, France</span>
          <a href="mailto:sidy.djimbira@gmail.com" className="navbar-email">sidy.djimbira@gmail.com</a>
        </div>
        <nav className="navbar-nav">
          <ul className="navbar-links">
            {navItems.map(({ to, label, match }) => (
              <li key={to}>
                <Link to={to} className={isActive(match) ? 'active' : ''}>{label}</Link>
              </li>
            ))}
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
          {navItems.map(({ to, label, match }) => (
            <li key={to}>
              <Link
                to={to}
                className={isActive(match) ? 'active' : ''}
                onClick={toggleMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
