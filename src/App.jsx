import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Navigation menuOpen={menuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
        <Routes>
          <Route path="/" element={<><Home /><Contact /></>} />
          <Route path="about/" element={<><About /><Contact /></>} />
          <Route path="/portfolio" element={<><Portfolio /><Contact /></>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation({ menuOpen, toggleMenu, closeMenu }) {
  const navigate = useNavigate();

  const handleH3Click = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav id="primary">
      <h3 onClick={handleH3Click}>Arcya Commercial Corporation</h3>
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? 'active' : ''}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default App;
