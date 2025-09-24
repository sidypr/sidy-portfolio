import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
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
