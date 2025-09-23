import React, { useRef, useEffect } from 'react';

const parseLogoImage = (svgElement) => {
  const svgString = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  return url;
};

const MetallicPaint = ({ 
  src, 
  edge = 0.1, 
  liquid = 0.3, 
  speed = 1, 
  metallic = true,
  className = '',
  style = {}
}) => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const animate = () => {
      if (!img || !img.complete) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      resizeCanvas();
      
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, width, height);
      
      timeRef.current += 0.016 * speed;
      
      // Créer un effet métallique liquide plus sophistiqué
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      
      if (metallic) {
        const hue = (timeRef.current * 30) % 360;
        const wave = Math.sin(timeRef.current * 2) * 0.1 + 0.9;
        
        gradient.addColorStop(0, `hsl(${hue}, 85%, ${50 + wave * 20}%)`);
        gradient.addColorStop(0.2, `hsl(${(hue + 40) % 360}, 90%, ${60 + wave * 15}%)`);
        gradient.addColorStop(0.5, `hsl(${(hue + 80) % 360}, 95%, ${70 + wave * 10}%)`);
        gradient.addColorStop(0.8, `hsl(${(hue + 120) % 360}, 90%, ${60 + wave * 15}%)`);
        gradient.addColorStop(1, `hsl(${(hue + 160) % 360}, 85%, ${50 + wave * 20}%)`);
      } else {
        gradient.addColorStop(0, '#ffd700');
        gradient.addColorStop(0.5, '#ffed4e');
        gradient.addColorStop(1, '#ffd700');
      }

      // Dessiner l'image avec effet liquide
      ctx.save();
      
      // Créer un masque de l'image
      ctx.drawImage(img, 0, 0, width, height);
      
      // Sauvegarder le masque
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      // Créer un nouveau canvas pour l'effet métallique
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext('2d');
      
      // Appliquer le gradient métallique
      tempCtx.fillStyle = gradient;
      tempCtx.fillRect(0, 0, width, height);
      
      // Appliquer le masque
      const tempImageData = tempCtx.getImageData(0, 0, width, height);
      const tempData = tempImageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3]; // Utiliser l'alpha du masque
        tempData[i + 3] = alpha; // Appliquer la transparence
      }
      
      tempCtx.putImageData(tempImageData, 0, 0);
      
      // Dessiner le résultat final
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(tempCanvas, 0, 0);
      
      // Ajouter des effets de bordure liquide
      if (edge > 0) {
        ctx.strokeStyle = gradient;
        ctx.lineWidth = edge * 8;
        ctx.lineCap = 'round';
        ctx.strokeRect(edge * 4, edge * 4, width - edge * 8, height - edge * 8);
      }
      
      ctx.restore();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [src, edge, liquid, speed, metallic]);

  return (
    <div className={`metallic-paint ${className}`} style={style}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
      />
      <img
        ref={imageRef}
        src={src}
        alt=""
        style={{ display: 'none' }}
        onLoad={() => {}}
      />
    </div>
  );
};

export { MetallicPaint, parseLogoImage };
