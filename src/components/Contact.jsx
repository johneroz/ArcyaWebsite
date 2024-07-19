import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="fade-in">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.284297242692!2d120.98408!3d14.5666225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cbd56c0fffff%3A0x94a4077b02151fb0!2sBPI%20Mabini%20Echelon%20Tower%20Branch!5e0!3m2!1sen!2sus!4v1626016420978!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '10px', marginBottom: '20px' }}
          allowFullScreen=""
          loading="lazy"
          title="BPI Mabini Echelon Tower Branch"
        ></iframe>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch:</h3>
          <p><FontAwesomeIcon icon={faPhone} /> Tel: 123-456-7890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@mysite.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Echelon Tower Branch, 2100 Mabini St, Malate, Manila</p>
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
      <p>© Aryca Commercial Corporation. 2024 All Rights Reserved</p>
    </section>
  );
}

export default Contact;
