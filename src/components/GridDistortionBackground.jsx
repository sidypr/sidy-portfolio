import React, { useEffect, useRef } from 'react';
import './GridDistortionBackground.css';

const GridDistortionBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration de la grille
    const gridSize = 40;
    const distortionRadius = 200;
    const maxDistortion = 40;

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Style de la grille
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;

      // Dessiner les lignes verticales
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= canvas.height; y += 5) {
          const distance = Math.sqrt(
            Math.pow(x - mouseRef.current.x, 2) + 
            Math.pow(y - mouseRef.current.y, 2)
          );
          
          let offsetX = x;
          if (distance < distortionRadius) {
            const distortionFactor = (distortionRadius - distance) / distortionRadius;
            const angle = Math.atan2(y - mouseRef.current.y, x - mouseRef.current.x);
            offsetX = x + Math.cos(angle) * distortionFactor * maxDistortion;
          }

          if (y === 0) {
            ctx.moveTo(offsetX, y);
          } else {
            ctx.lineTo(offsetX, y);
          }
        }
        ctx.stroke();
      }

      // Dessiner les lignes horizontales
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 5) {
          const distance = Math.sqrt(
            Math.pow(x - mouseRef.current.x, 2) + 
            Math.pow(y - mouseRef.current.y, 2)
          );
          
          let offsetY = y;
          if (distance < distortionRadius) {
            const distortionFactor = (distortionRadius - distance) / distortionRadius;
            const angle = Math.atan2(y - mouseRef.current.y, x - mouseRef.current.x);
            offsetY = y + Math.sin(angle) * distortionFactor * maxDistortion;
          }

          if (x === 0) {
            ctx.moveTo(x, offsetY);
          } else {
            ctx.lineTo(x, offsetY);
          }
        }
        ctx.stroke();
      }

      // Ajouter un effet de lueur autour de la souris
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, distortionRadius
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="grid-distortion-background"
    />
  );
};

export default GridDistortionBackground; 