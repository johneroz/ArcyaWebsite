import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const handleHamburgerClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="App">
      <nav id="primary">
        <h3>Arcya Commercial Corporation</h3>
        <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={menuActive ? 'active' : ''}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header id="home" className="fade-in">
        <div className="header-subtitle">WELCOME TO</div>
        <h1>ARCYA COMMERCIAL CORPORATION</h1>
        <div className="arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </header>
      <section id="about" className="fade-in">
        <h2>About Us</h2>
        <p>About us content...</p>
      </section>
      <section id="portfolio" className="fade-in">
        <h2>Our Portfolio</h2>
        <p>Portfolio content...</p>
      </section>
      <section id="contact" className="fade-in">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch:</h3>
            <p>Tel: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
            <p>Echelon Tower, 2100 Mabini St</p>
            <p>Malate, Manila</p>
          </div>
          <div className="contact-form">
            <h3>Contact Us:</h3>
            <form>
              <label htmlFor="name">Enter Your Name *</label>
              <input type="text" id="name" name="name" placeholder="Name" />
              
              <label htmlFor="email">Enter Your Email *</label>
              <input type="email" id="email" name="email" placeholder="Email" />
              
              <label htmlFor="message">Enter Your Message *</label>
              <textarea id="message" name="message" placeholder="Message"></textarea>
              
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <p>© 2024 All Rights Reserve</p>
      </section>
    </div>
  );
}

export default App;
