import React from 'react';
import './LogoSimple.css';

const LogoSimple = ({ width = '200px', height = '60px' }) => {
  return (
    <div className="logo-simple" style={{ width, height }}>
      <svg width="100%" height="100%" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="25%" stopColor="#4ecdc4" />
            <stop offset="50%" stopColor="#45b7d1" />
            <stop offset="75%" stopColor="#96ceb4" />
            <stop offset="100%" stopColor="#feca57" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <text 
          x="200" 
          y="70" 
          className="logo-text-simple"
          fill="url(#logoGradient)"
          filter="url(#glow)"
        >
          SIDY DJIMBIRA
        </text>
      </svg>
    </div>
  );
};

export default LogoSimple;
