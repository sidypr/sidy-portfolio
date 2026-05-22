import React from 'react';
import Dither from './Dither';
import { DITHER_ANIMATION_PROPS } from './ditherConfig';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container page-with-dither">
      <div className="page-dither-bg">
        <Dither {...DITHER_ANIMATION_PROPS} />
      </div>
      <div className="contact-box">
        <h2>Me contacter</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:sidy.djimbira@gmail.com">sidy.djimbira@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/sidypr" target="_blank" rel="noopener noreferrer">Mon GitHub</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-youtube"></i>
            <a href="https://www.youtube.com/@sidy-uv5ri" target="_blank" rel="noopener noreferrer">Ma chaîne YouTube</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/sidy-djimbira-118471223" target="_blank" rel="noopener noreferrer">Mon profil LinkedIn</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-file-download"></i>
            <a href="https://cvdesignr.com/p/67974bc56aec7" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
