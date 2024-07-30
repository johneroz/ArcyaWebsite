import React, { useState } from 'react';
import '../styles/About.css';
import aboutImage1 from '../assets/AboutImages/aboutImage1.jpg'; 
import aboutImage2 from '../assets/AboutImages/aboutImage2.jpg'; 

function About() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className="about fade-in">
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit gravida rutrum. Bibendum neque egestas congue quisque egestas diam in arcu. Consequat ac felis donec et odio pellentesque.</p>
        </div>
        <div className="about-image-container">
          <img
            src={aboutImage1}
            alt="About Us 1"
            className="about-image"
            onClick={() => handleImageClick(aboutImage1)}
          />
          <span className="photo-credit">Photo by Doobalro TV</span>
        </div>
      </div>
      <div className="about-content reverse">
        <div className="about-text">
          <h2>History</h2>
          <p>Ultrices dui sapien eget mi proin sed. Adipiscing elit pellentesque habitant morbi. Non sodales neque sodales ut etiam sit amet. Non enim praesent elementum facilisis leo vel fringilla est. Tristique senectus et netus et malesuada. Sed enim ut sem viverra aliquet eget. Sed viverra ipsum nunc aliquet bibendum enim.</p>
        </div>
        <div className="about-image-container">
          <img
            src={aboutImage2}
            alt="About Us 2"
            className="about-image"
            onClick={() => handleImageClick(aboutImage2)}
          />
          <span className="photo-credit">Image courtesy of Lamudi</span>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
}

export default About;
