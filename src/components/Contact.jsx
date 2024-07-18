import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="fade-in">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch:</h3>
          <p><FontAwesomeIcon icon={faPhone} /> Tel: 123-456-7890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@mysite.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Echelon Tower, 2100 Mabini St, Malate, Manila</p>
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
      <p>© 2024 All Rights Reserved</p>
    </section>
  );
}

export default Contact;
