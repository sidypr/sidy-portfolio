import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './SpotifyMobileProject.css';

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

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateImage = useCallback((direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [currentIndex, images.length]);

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
  }, [selectedImage, closeModal, navigateImage]);

  const technologies = [
    { name: 'React Native', icon: 'devicon-react-original' },
    { name: 'Expo', icon: 'devicon-expo-original' },
    { name: 'TypeScript', icon: 'devicon-typescript-original' },
    { name: 'JavaScript', icon: 'devicon-javascript-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-original' },
    { name: 'Git', icon: 'devicon-git-original' },
    { name: 'GitHub', icon: 'devicon-github-original' }
  ];

  return (
    <div className="spotify-mobile-project">
      <header className="project-header">
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
          <div className="features-grid">
            <div className="feature-card">
              <h3>Authentification sécurisée</h3>
              <p>Connexion OAuth2 avec Spotify, gestion des tokens d'accès et déconnexion avec nettoyage des données</p>
            </div>
            <div className="feature-card">
              <h3>Navigation par onglets</h3>
              <p>6 onglets : Accueil, Statistiques, Playlists, Recherche, Aide et Profil pour une navigation intuitive</p>
            </div>
            <div className="feature-card">
              <h3>Gestion des playlists</h3>
              <p>Affichage de toutes vos playlists Spotify avec barre de recherche, visualisation des titres et accès aux titres likés</p>
            </div>
            <div className="feature-card">
              <h3>Recherche avancée</h3>
              <p>Recherche multi-catégories (titres, artistes, albums) avec filtrage par onglets et historique des recherches</p>
            </div>
            <div className="feature-card">
              <h3>Interface moderne</h3>
              <p>Thème sombre inspiré de Spotify avec animations fluides et UX optimisée pour mobile</p>
            </div>
            <div className="feature-card">
              <h3>Configuration iOS</h3>
              <p>Application prête pour le développement et le déploiement mobile sur iOS</p>
            </div>
          </div>
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
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openModal(index)}>
                <img src={image} alt={`Spotify Mobile ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="project-status">
          <h2>État du projet</h2>
          <div className="status-grid">
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>Authentification fonctionnelle</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>Playlists avec recherche et titres likés</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>Recherche repositionnée</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>Interface moderne et responsive</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>Configuration iOS prête</span>
            </div>
            <div className="status-item completed">
              <span className="status-icon">✅</span>
              <span>Code publié sur GitHub</span>
            </div>
          </div>
          <p className="status-conclusion">
            L'application est <strong>prête pour le développement</strong> et le déploiement mobile !
          </p>
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