import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';
import logo from '../assets/sidy-logo.svg';

const Logo = ({ width = '200px', height = '60px' }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function loadLogoImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "logo.svg", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);

      } catch (err) {
        console.error("Error loading logo image:", err);
      }
    }

    loadLogoImage();
  }, []);

  return (
    <div style={{ width, height, position: 'relative' }}>
      <MetallicPaint 
        imageData={imageData ?? new ImageData(1, 1)} 
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
