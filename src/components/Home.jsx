import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';


function Home() {
  return (
    <header className="fade-in">
      <div className="header-subtitle">WELCOME TO</div>
      <h1>ARCYA COMMERCIAL CORPORATION</h1>
      <div className="arrow">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </header>
  );
}

export default Home;
