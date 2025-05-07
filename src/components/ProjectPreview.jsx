import React, { useState, useEffect } from 'react';
import './ProjectPreview.css';

const ProjectPreview = ({ url, title, description }) => {
  const [metadata, setMetadata] = useState({
    title: title || '',
    description: description || '',
    image: null,
    loading: true
  });

  // Génère une couleur de fond basée sur l'URL (pour avoir une couleur consistante pour le même site)
  const generateColorFromUrl = (url) => {
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
      hash = url.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const color1 = `hsl(${hash % 360}, 70%, 20%)`;
    const color2 = `hsl(${(hash + 120) % 360}, 70%, 30%)`;
    
    return `linear-gradient(135deg, ${color1}, ${color2})`;
  };

  // Simuler la récupération des métadonnées (dans un vrai cas, cela serait fait via une API côté serveur)
  useEffect(() => {
    // Simule un délai pour montrer le chargement
    const timer = setTimeout(() => {
      // Ici, dans une application réelle, on ferait un appel à une API backend 
      // qui récupérerait les métadonnées via un scraper
      setMetadata({
        title: title,
        description: description,
        image: null, // Dans une implémentation réelle, ce serait l'URL de l'image OG
        loading: false
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [url, title, description]);

  const domain = url ? new URL(url).hostname : '';
  const backgroundGradient = generateColorFromUrl(url);

  return (
    <div className="project-preview">
      <a href={url} target="_blank" rel="noopener noreferrer" className="preview-link">
        <div className="preview-card" style={{ background: backgroundGradient }}>
          {metadata.loading ? (
            <div className="preview-loading">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <>
              <div className="preview-content">
                <h3 className="preview-title">{metadata.title}</h3>
                <p className="preview-description">{metadata.description}</p>
                <div className="preview-url">
                  <span className="preview-domain">{domain}</span>
                </div>
              </div>
              <div className="preview-border"></div>
            </>
          )}
        </div>
      </a>
    </div>
  );
};

export default ProjectPreview; 