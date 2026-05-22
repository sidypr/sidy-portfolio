import React from 'react';
import Dither from './Dither';
import { DITHER_ANIMATION_PROPS } from './ditherConfig';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper page-with-dither">
      <div className="page-dither-bg">
        <Dither {...DITHER_ANIMATION_PROPS} />
      </div>
      <div className="home-content">
        <h1 className="home-title">Sidy Djimbira</h1>
        <h2 className="home-subtitle">Développeur Web</h2>
        <p className="home-tagline">Je conçois des interfaces modernes, performantes et centrées utilisateur.</p>
        <div className="home-cta">
          <Link to="/projects" className="cta-button">Voir mes projets</Link>
          <Link to="/contact" className="cta-button btn--ghost">Me contacter</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
