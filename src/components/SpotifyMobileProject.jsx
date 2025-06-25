import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SpotifyMobileProject.css';
import MasonryGallery from './MasonryGallery/MasonryGallery';
import CircularGallery from './CircularGallery/CircularGallery';

// Import de toutes les images Spotify Mobile
import spotifyImg1 from '../photo/image &spotifyappmobile_0441.PNG';
import spotifyImg2 from '../photo/image &spotifyappmobile_0442.PNG';
import spotifyImg3 from '../photo/image &spotifyappmobile_0443.PNG';
import spotifyImg4 from '../photo/image &spotifyappmobile_0444.PNG';
import spotifyImg5 from '../photo/image &spotifyappmobile_0445.PNG';
import spotifyImg6 from '../photo/image &spotifyappmobile_0446.PNG';
import spotifyImg7 from '../photo/image &spotifyappmobile_0447.PNG';
import spotifyImg8 from '../photo/image &spotifyappmobile_0448.PNG';
import spotifyImg9 from '../photo/image &spotifyappmobile_0449.PNG';
import spotifyImg10 from '../photo/image &spotifyappmobile_0450.PNG';
import spotifyImg11 from '../photo/image &spotifyappmobile_0451.PNG';
import spotifyImg12 from '../photo/image &spotifyappmobile_0452.PNG';
import spotifyImg13 from '../photo/image &spotifyappmobile_0453.PNG';
import spotifyImg14 from '../photo/image &spotifyappmobile_0454.PNG';
import headerImg from '../photo/image &spotifyappmobile_0447.PNG';

const SpotifyMobileProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    spotifyImg1, spotifyImg2, spotifyImg3, spotifyImg4, spotifyImg5,
    spotifyImg6, spotifyImg7, spotifyImg8, spotifyImg9, spotifyImg10,
    spotifyImg11, spotifyImg12, spotifyImg13, spotifyImg14
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Gestion clavier
  React.useEffect(() => {
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
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, closeModal, navigateImage]);

  const technologies = [
    { name: 'React Native', icon: 'devicon-react-original' },
    { name: 'Expo', icon: 'devicon-expo-original' },
    { name: 'TypeScript', icon: 'devicon-typescript-original' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Go', icon: 'devicon-go-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' }
  ];

  const galleryItems = [
    { image: spotifyImg1, title: 'Accueil', link: 'https://github.com/sidypr/stats-Spotify-mob' },
    { image: spotifyImg2, title: 'Statistiques', link: 'https://github.com/sidypr/stats-Spotify-mob' },
    { image: spotifyImg3, title: 'Playlists', link: 'https://github.com/sidypr/stats-Spotify-mob' },
    { image: spotifyImg4, title: 'Recherche', link: 'https://github.com/sidypr/stats-Spotify-mob' },
    { image: spotifyImg5, title: 'Profil', link: 'https://github.com/sidypr/stats-Spotify-mob' },
    { image: spotifyImg6, title: 'Aide', link: 'https://github.com/sidypr/stats-Spotify-mob' }
  ];

  return (
    <div className="spotify-mobile-project">
      <header className="project-header" style={{backgroundImage: `url(${headerImg})`}}>
        <Link to="/projects" className="back-link">← Retour aux projets</Link>
        <div className="project-title-section">
          <h1 className="project-title">Spotify Stats Mobile</h1>
          <p className="project-subtitle">Application mobile React Native avec Expo</p>
          <div className="project-main-links">
            <a href="https://github.com/sidypr/stats-Spotify-mob" target="_blank" rel="noopener noreferrer" className="project-link-btn primary">
              Voir sur GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="project-content">
        <section className="project-overview">
          <h2>Vue d'ensemble</h2>
          <p>
            Application mobile React Native développée avec Expo qui permet aux utilisateurs de visualiser leurs 
            statistiques d'écoute Spotify et gérer leurs playlists. L'application offre une expérience utilisateur 
            moderne avec authentification OAuth2, navigation par onglets et interface inspirée de Spotify.
          </p>
        </section>

        <section className="project-features">
          <h2>Fonctionnalités principales</h2>
          <CircularGallery items={galleryItems} bend={2} borderRadius={0.09} itemScale={1.8} />
        </section>

        <section className="project-tech">
          <h2>Architecture technique</h2>
          
          <div className="tech-structure">
            <h3>Structure des dossiers</h3>
            <div className="folder-structure">
              <pre>{`
📁 app/                 # Pages et navigation
📁 components/          # Composants réutilisables  
📁 hooks/              # Custom hooks (useAuth)
📁 services/           # API Spotify
📁 config/             # Configuration
📁 assets/             # Images et ressources
📁 ios/               # Configuration iOS
              `}</pre>
            </div>
          </div>

          <div className="technologies-used">
            <h3>Technologies utilisées</h3>
            <div className="tech-logos">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <i className={tech.icon}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-details">
            <div className="tech-category">
              <h4>Framework Mobile</h4>
              <p><strong>React Native + Expo</strong> - Framework de développement mobile multiplateforme</p>
            </div>
            <div className="tech-category">
              <h4>Langage</h4>
              <p><strong>TypeScript</strong> - Typage statique pour un code plus robuste et maintenable</p>
            </div>
            <div className="tech-category">
              <h4>Navigation</h4>
              <p><strong>Expo Router</strong> - Système de navigation moderne et performant</p>
            </div>
            <div className="tech-category">
              <h4>Stockage</h4>
              <p><strong>AsyncStorage</strong> - Stockage local asynchrone pour les données utilisateur</p>
            </div>
            <div className="tech-category">
              <h4>API</h4>
              <p><strong>Spotify Web API</strong> - Intégration complète avec les données musicales Spotify</p>
            </div>
          </div>
        </section>

        <section className="project-gallery">
          <h2>Aperçu de l'application</h2>
          <MasonryGallery images={[
            spotifyImg1, spotifyImg2, spotifyImg3, spotifyImg4, spotifyImg5,
            spotifyImg6, spotifyImg7, spotifyImg8, spotifyImg9, spotifyImg10,
            spotifyImg11, spotifyImg12, spotifyImg13, spotifyImg14
          ]} />
        </section>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={() => navigateImage('prev')}>‹</button>
            <img src={selectedImage} alt="Spotify Mobile" className="modal-image" />
            <button className="modal-nav modal-next" onClick={() => navigateImage('next')}>›</button>
            <div className="modal-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotifyMobileProject; 