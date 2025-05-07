import React from 'react';
import './About.css';
import sidyNoir from './photo/sidyNoir.jpeg';

const About = () => {
  return (
    <div className="cv-root">
      <div className="cv-header-bg">
        <h1 className="cv-title">CURRICULUM VITAE</h1>
      </div>
      <div className="cv-content">
        {/* Colonne gauche : photo + infos */}
        <div className="cv-left">
          <div className="cv-photo-block">
            <div className="cv-photo-infos">
              <div className="cv-photo-name-block">
                <span className="cv-photo-name">SIDY</span>
                <span className="cv-photo-date">06.06.2002</span>
              </div>
              <span className="cv-photo-surname">DJIMBIRA</span>
              <span className="cv-photo-city">PARIS</span>
            </div>
            <img src={sidyNoir} alt="Sidy Djimbira" className="cv-photo" />
          </div>
        </div>
        {/* Colonne droite : contenu */}
        <div className="cv-right">
          <div className="cv-block cv-work">
            <div className="cv-block-title">EXPÉRIENCE</div>
            <div className="cv-work-list">
              <div className="cv-work-row">
                <span className="cv-work-company">INSYS</span>
                <span className="cv-work-date">2024</span>
                <span className="cv-work-role">DÉVELOPPEUR WEB</span>
                <span className="cv-work-loc">DISTANCIEL</span>
              </div>
              <div className="cv-work-row">
                <span className="cv-work-company">LASER FORMATION</span>
                <span className="cv-work-date">2021</span>
                <span className="cv-work-role">FORMATION PEE</span>
                <span className="cv-work-loc">PARIS</span>
              </div>
              <div className="cv-work-row">
                <span className="cv-work-company">LYCÉE FLORA TRISTAN</span>
                <span className="cv-work-date">2021</span>
                <span className="cv-work-role">BAC STMG</span>
                <span className="cv-work-loc">NOISY</span>
              </div>
            </div>
          </div>
          <div className="cv-block cv-software">
            <div className="cv-block-title">COMPÉTENCES</div>
            <ul className="cv-list">
              <li>REACT.JS <span>5/5</span></li>
              <li>SYMFONY <span>5/5</span></li>
              <li>JAVASCRIPT <span>5/5</span></li>
              <li>FIGMA <span>5/5</span></li>
            </ul>
          </div>
          <div className="cv-block cv-interests">
            <div className="cv-block-title">CENTRES D’INTÉRÊT</div>
            <ul className="cv-list">
              <li>FOOTBALL</li>
              <li>LECTURE</li>
              <li>VOYAGES</li>
              <li>TECHNOLOGIE</li>
            </ul>
          </div>
          <div className="cv-block cv-contact">
            <div className="cv-contact-row">TÉL. <span>06 11 03 33 63</span></div>
            <div className="cv-contact-row">MAIL <span>sidy.djimbira@gmail.com</span></div>
            <div className="cv-contact-row">WEB <span>sidydjimbira.com</span></div>
          </div>
          <div className="cv-block cv-languages">
            <div className="cv-block-title">LANGUES</div>
            <ul className="cv-list">
              <li><span className="language-name">Anglais</span> <span className="language-level">Courant</span></li>
              <li><span className="language-name">Espagnol</span> <span className="language-level">Intermédiaire</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 