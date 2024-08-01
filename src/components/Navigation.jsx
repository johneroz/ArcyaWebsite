import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation({ menuOpen, toggleMenu, closeMenu, scrolled }) {
  const navigate = useNavigate();

  const handleH3Click = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <nav id="primary" className={scrolled ? 'scrolled' : ''}>
      <h3 onClick={handleH3Click}>Arcya Commercial Corporation</h3>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? 'active' : ''}>
        <li><NavLink to="/" onClick={handleHomeClick} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
        <li><NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
