import React from 'react';
import GridDistortionBackground from './components/GridDistortionBackground';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <GridDistortionBackground />
      <div className="home-content">
        <h1 className="home-title">Sidy Djimbira</h1>
        <h2 className="home-subtitle">Développeur Web</h2>
        
        <div className="home-cta">
          <Link to="/projects" className="cta-button">Voir mes projets</Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 