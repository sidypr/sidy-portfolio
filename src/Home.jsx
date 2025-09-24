import React from 'react';
import Dither from './Dither';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="lightning-background">
        <Dither waveColor={[0.5, 0.5, 0.5]} disableAnimation={false} enableMouseInteraction={true} mouseRadius={0.3} colorNum={16.6} waveAmplitude={0.57} waveFrequency={3} waveSpeed={0.05} />
      </div>
      <div className="home-content">
        <h1 className="home-title">Sidy Djimbira</h1>
        <h2 className="home-subtitle">Développeur Web</h2>
        <p className="home-tagline">Je conçois des interfaces modernes, performantes et centrées utilisateur.</p>
        <div className="home-cta">
          <Link to="/projects" className="cta-button">Voir mes projets</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
