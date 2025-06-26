import React from 'react';
import Spline from '@splinetool/react-spline';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="spline-bg">
        <Spline scene="https://prod.spline.design/6YQqQn6QvQvQvQvQ/scene.splinecode" />
      </div>
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