import React, { useState } from 'react';
import './WebsitePreview.css';
import pokeBuildPreview from '../assets/pokebuild-preview.jpg';

const WebsitePreview = ({ url, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  const defaultTitle = title || new URL(url).hostname.replace('www.', '');
  
  // Fonction pour extraire le nom de domaine pour l'affichage
  const getDomain = (url) => {
    try {
      const domain = new URL(url).hostname;
      return domain.startsWith('www.') ? domain.substring(4) : domain;
    } catch (e) {
      return url;
    }
  };

  // Fonction pour obtenir la prévisualisation correcte en fonction de l'URL
  const getPreviewUrl = (url) => {
    if (url.includes('stellular-dasik-5423ce.netlify.app')) {
      return pokeBuildPreview;
    }
    // Utiliser une URL de placeholder pour les autres sites
    return `https://shot.screenshotapi.net/screenshot?token=GUJYW54-WCFM2EQ-J1F5HAP-Y8J7FWD&url=${encodeURIComponent(url)}&width=800&height=600&output=image&file_type=png`;
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <div className="website-preview-card">
      <div className="website-preview-header">
        <div className="browser-dots">
          <span className="browser-dot red"></span>
          <span className="browser-dot yellow"></span>
          <span className="browser-dot green"></span>
        </div>
        <div className="browser-address-bar">
          <span className="browser-lock-icon">🔒</span>
          <span className="browser-url">{getDomain(url)}</span>
        </div>
      </div>
      
      <div className="website-preview-body">
        {isLoading && (
          <div className="website-preview-loading">
            <div className="website-preview-spinner"></div>
            <p>Chargement de l'aperçu...</p>
          </div>
        )}
        
        {isError && (
          <div className="website-preview-error">
            <span className="website-preview-error-icon">⚠️</span>
            <p>Impossible de charger l'aperçu</p>
          </div>
        )}
        
        <img 
          src={getPreviewUrl(url)}
          alt={`Aperçu de ${defaultTitle}`}
          className="website-preview-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
        
        {/* Image de fallback si l'API ne fonctionne pas */}
        {isError && (
          <div className="website-preview-fallback">
            <div className="website-preview-mock">
              <div className="mock-header"></div>
              <div className="mock-content">
                <div className="mock-block wide"></div>
                <div className="mock-block medium"></div>
                <div className="mock-text-lines">
                  <div className="mock-line"></div>
                  <div className="mock-line"></div>
                  <div className="mock-line short"></div>
                </div>
                <div className="mock-grid">
                  <div className="mock-grid-item"></div>
                  <div className="mock-grid-item"></div>
                  <div className="mock-grid-item"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="website-preview-footer">
        <h3 className="website-preview-title">{defaultTitle}</h3>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="website-preview-button"
        >
          Visiter le site
        </a>
      </div>
    </div>
  );
};

export default WebsitePreview; 