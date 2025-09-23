import React, { useRef, useEffect, useState } from 'react';
import { MetallicPaint, parseLogoImage } from './MetallicPaint';
import './cursorLogo.css';

const CursorLogoMetallic = () => {
  const logoRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoImageSrc, setLogoImageSrc] = useState('');

  // Créer le SVG du logo avec le texte "Sidy Djimbira"
  useEffect(() => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '200');
    svg.setAttribute('height', '60');
    svg.setAttribute('viewBox', '0 0 200 60');
    
    // Fond transparent
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '200');
    rect.setAttribute('height', '60');
    rect.setAttribute('fill', 'transparent');
    svg.appendChild(rect);
    
    // Texte "Sidy Djimbira"
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '100');
    text.setAttribute('y', '35');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('font-family', 'Arial, sans-serif');
    text.setAttribute('font-size', '24');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('fill', '#000000');
    text.textContent = 'Sidy Djimbira';
    svg.appendChild(text);
    
    // Convertir en image
    const imageSrc = parseLogoImage(svg);
    setLogoImageSrc(imageSrc);
    
    // Nettoyer l'URL après un délai
    return () => {
      setTimeout(() => URL.revokeObjectURL(imageSrc), 1000);
    };
  }, []);

  // Suivre la position de la souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation fluide du logo
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let animationId;
    
    const animate = () => {
      logo.style.left = `${mousePosition.x}px`;
      logo.style.top = `${mousePosition.y}px`;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePosition]);

  if (!logoImageSrc) return null;

  return (
    <div
      ref={logoRef}
      className="cursor-logo-metallic"
    >
      <MetallicPaint
        src={logoImageSrc}
        edge={0.2}
        liquid={0.4}
        speed={2}
        metallic={true}
        style={{
          width: '200px',
          height: '60px'
        }}
      />
    </div>
  );
};

export default CursorLogoMetallic;
