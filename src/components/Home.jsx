import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Ensure you're using React Router
import '../styles/Home.css';
import homeImage from '../assets/Home/homeImage.jpg'; // Replace with your image path

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <>
      <header className="fade-in">
        <div className="header-subtitle">WELCOME TO</div>
        <h1>ARCYA COMMERCIAL CORPORATION</h1>
        <p>We have been in the indjustry for more than 20 years.</p>
        <div className="arrow" onClick={scrollToContent}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </header>

      <section className="home-info">
        <div className="home-info-text">
          <h2>About Us</h2>
          <p>Arcya Commercial Corporation is a real estate company that focuses on leasing and developing properties. We have been in the industry for more than 20 years.
             Our company's prime edge is the strong foundation of its projects from container vans up to their offered dormitory and condominium structures. We provide Warehouses,
             Commercial and Residential units available for rent in Sta. Rosa, Laguna, Baguio, Mandaluyong, Fort and Manila.</p>
          <Link to="/about" className="learn-more">Learn More</Link>
        </div>
        <div className="home-info-image-container" onClick={() => handleImageClick(homeImage)}>
          <img
            src={homeImage}
            alt="Home"
            className="home-info-image"
          />
          <span className="photo-credit">Image courtesy of Tripadvisor</span>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged" />
        </div>
      )}
    </>
  );
}

export default Home;
