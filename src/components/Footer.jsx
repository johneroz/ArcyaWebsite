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
          <p>Echelon Tower, 2100 Mabini St, Malate, Manila</p>
          <p>Philippines</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>815-515-2603</p>
          <p>company@domain.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
