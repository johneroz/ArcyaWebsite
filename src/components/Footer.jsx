import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Location</h4>
          <p>Room 301 Echelon Tower Condominium, 2100 A. Mabini St, Malate, Manila</p>
          <p>Philippines</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p> 632-8521-6896</p>
          <p>company@domain.com</p>
        </div>
        <div className="footer-section-credits">
          <p>© Arcya Commercial Corporation. 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
