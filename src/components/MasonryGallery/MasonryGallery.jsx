import React, { useState, useRef, useEffect } from 'react';
import './MasonryGallery.css';

const MasonryGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    setIsZoomed(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setIsZoomed(false);
  };

  // Gestion clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case ' ':
        case 'Enter':
          e.preventDefault();
          toggleZoom();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, isZoomed]);

  // Pré-chargement des images
  useEffect(() => {
    const loadImages = () => {
      let loaded = 0;
      images.forEach((src, index) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          setLoadedImages(loaded);
          if (loaded === images.length) {
            setIsLoading(false);
          }
        };
        img.src = src;
      });
    };

    if (images.length > 0) {
      loadImages();
    }
  }, [images]);

  if (isLoading) {
    return (
      <div className="masonry-loading">
        <div className="loading-spinner"></div>
        <p>Chargement de la galerie... {loadedImages}/{images.length}</p>
      </div>
    );
  }

  return (
    <div className="masonry-gallery">
      <div className="masonry-grid">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="masonry-item"
            onClick={() => openModal(index)}
          >
            <div className="masonry-image-container">
              <img 
                src={src} 
                alt={`Image ${index + 1}`}
                className="masonry-image"
                loading="lazy"
              />
              <div className="masonry-overlay">
                <div className="masonry-overlay-content">
                  <span className="masonry-image-number">{index + 1}</span>
                  <div className="masonry-zoom-icon">🔍</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="masonry-modal-overlay" onClick={closeModal}>
          <div className="masonry-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="masonry-modal-close" onClick={closeModal}>×</button>
            <button 
              className="masonry-modal-nav masonry-modal-prev" 
              onClick={() => navigateImage('prev')}
            >
              ‹
            </button>
            <img 
              src={selectedImage} 
              alt="Image sélectionnée" 
              className={`masonry-modal-image ${isZoomed ? 'zoomed' : ''}`}
              onClick={toggleZoom}
            />
            <button 
              className="masonry-modal-nav masonry-modal-next" 
              onClick={() => navigateImage('next')}
            >
              ›
            </button>
            <div className="masonry-modal-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery; 