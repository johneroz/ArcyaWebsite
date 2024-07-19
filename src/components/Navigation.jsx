import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
