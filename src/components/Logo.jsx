import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';
import logo from '../assets/sidy-logo.svg';
import './Logo.css';

const Logo = ({ width = '250px', height = '75px' }) => {
  const [imageData, setImageData] = useState(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    async function loadLogoImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "logo.svg", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        if (parsedData?.imageData) {
          setImageData(parsedData.imageData);
          setUseFallback(false);
        } else {
          setUseFallback(true);
        }

      } catch (err) {
        console.error("Error loading logo image:", err);
        setUseFallback(true);
      }
    }

    loadLogoImage();
  }, []);

  if (useFallback || !imageData) {
    return (
      <div className="logo-fallback" style={{ width, height }}>
        <svg width="100%" height="100%" viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="50%" stopColor="#4ecdc4" />
              <stop offset="100%" stopColor="#45b7d1" />
            </linearGradient>
          </defs>
          <text 
            x="250" 
            y="90" 
            className="logo-text-fallback"
            fill="url(#logoGradient)"
          >
            SIDY DJIMBIRA
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div style={{ width, height, position: 'relative' }}>
      <MetallicPaint 
        imageData={imageData} 
        params={{ 
          edge: 2, 
          patternBlur: 0.005, 
          patternScale: 2, 
          refraction: 0.015, 
          speed: 0.3, 
          liquid: 0.07 
        }} 
      />
    </div>
  );
};

export default Logo;
