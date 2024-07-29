import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Ensure you're using React Router
import '../styles/Home.css';
import homeImage from '../assets/Home/homeImage.jpg'; // Replace with your image path

function Home() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className="fade-in">
        <div className="header-subtitle">WELCOME TO</div>
        <h1>ARCYA COMMERCIAL CORPORATION</h1>
        <div className="arrow" onClick={scrollToContent}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </header>
      
      <section className="home-info">
        <div className="home-info-text">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida rutrum. Bibendum neque egestas congue quisque egestas diam in arcu. Consequat ac felis donec et odio pellentesque.</p>
          <Link to="/about" className="learn-more">Learn More</Link>
        </div>
        <div className="home-info-image">
          <img src={homeImage} alt="Home" />
        </div>
      </section>
    </>
  );
}

export default Home;
