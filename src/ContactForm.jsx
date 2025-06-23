import React from 'react';
import LiquidChrome from './components/LiquidChrome';
import './ContactForm.css';

const ContactForm = () => {

  return (
    <div className="contact-container">
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={0.1}
        amplitude={0.3}
        interactive={true}
      />
      <div className="contact-box">
        <h2>Me Contacter</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:sidy.djimbira@gmail.com" style={{color: 'rgb(255, 255, 255)'}}>sidy.djimbira@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/sidypr" target="_blank" rel="noopener noreferrer" style={{color: 'rgb(255, 255, 255)'}}>Mon GitHub</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-youtube"></i>
            <a href="https://www.youtube.com/@sidy-uv5ri" target="_blank" rel="noopener noreferrer" style={{color: 'rgb(255, 255, 255)'}}>Ma Chaîne YouTube</a>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/sidy-djimbira-118471223" target="_blank" rel="noopener noreferrer" style={{color: 'rgb(255, 255, 255)'}}>Mon Profil LinkedIn</a>
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