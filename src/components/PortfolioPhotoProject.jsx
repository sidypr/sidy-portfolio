import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPhotoProject.css';
import MasonryGallery from './MasonryGallery/MasonryGallery';

// Import des images portfolio
import portfolio1 from '../photo/portfolio1.png';
import portfolio2 from '../photo/portfolio2.png';
import portfolio3 from '../photo/portfolio3.png';
import portfolio4 from '../photo/portfolio4.png';
import portfolio5 from '../photo/portfolio5.png';
import portfolio6 from '../photo/portfolio6.png';
import portfolio8 from '../photo/portfolio8.png';
import portfolio9 from '../photo/portfolio9.png';

const PortfolioPhotoProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: portfolio1, alt: "Page d'accueil", description: "Interface d'accueil avec photos vedettes et design responsive" },
    { src: portfolio2, alt: "Galerie principale", description: "Affichage de toutes les photos avec système de filtrage par catégorie" },
    { src: portfolio3, alt: "Page À propos", description: "Présentation du photographe et de son équipe avec contenus éditables" },
    { src: portfolio4, alt: "Page Contact", description: "Informations de contact et heures d'ouverture" },
    { src: portfolio5, alt: "Interface d'administration", description: "Dashboard administrateur avec statistiques et gestion complète" },
    { src: portfolio6, alt: "Gestion des photos", description: "Interface CRUD pour l'ajout et la modification des photos" },
    { src: portfolio8, alt: "Système d'authentification", description: "Page de connexion sécurisée pour les administrateurs" },
    { src: portfolio9, alt: "Gestion de contenu", description: "Édition des contenus textuels de toutes les pages du site" }
  ];

  const technologies = {
    backend: [
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'Doctrine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-original.svg' }
    ],
    frontend: [
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
    ],
    tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
    ]
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (!images[currentImageIndex]) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  React.useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, handleKeyDown]);

  return (
    <div className="portfolio-photo-project">
      <div className="project-header">
        <div className="container">
          <Link to="/projects" className="back-link">← Retour aux projets</Link>
          <h1 className="project-title">📸 Portfolio Photo Symfony</h1>
          <p className="project-subtitle">Application web de gestion de portfolio photographique développée avec Symfony</p>
          
          <div className="project-links">
            <a href="https://github.com/sidypr/portfolioPhoto" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fab fa-github"></i> Code source
            </a>
            <a href="https://youtu.be/IC8knROABTA" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fab fa-youtube"></i> Voir la vidéo
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="project-overview">
          <h2>Vue d'ensemble</h2>
          <p>
            <strong>Portfolio Photo</strong> est une <strong>application web de gestion de portfolio photographique</strong> développée avec 
            <strong> Symfony 6.x</strong>, offrant une interface publique élégante et un système d'administration complet pour les photographes professionnels.
          </p>
        </section>

        <section className="tech-stack">
          <h2>Technologies utilisées</h2>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-icons">
                {technologies.backend.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
              <ul>
                <li><strong>Framework</strong> : Symfony 6.x</li>
                <li><strong>PHP</strong> : 8.x</li>
                <li><strong>Base de données</strong> : SQLite (facile à déployer)</li>
                <li><strong>ORM</strong> : Doctrine</li>
                <li><strong>Sécurité</strong> : Symfony Security</li>
              </ul>
            </div>
            
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-icons">
                {technologies.frontend.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
              <ul>
                <li><strong>CSS Framework</strong> : Bootstrap 5</li>
                <li><strong>Templates</strong> : Twig</li>
                <li><strong>JavaScript</strong> : Vanilla JS</li>
                <li><strong>Design</strong> : CSS personnalisé</li>
              </ul>
            </div>
            
            <div className="tech-category">
              <h3>Outils</h3>
              <div className="tech-icons">
                {technologies.tools.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
              <ul>
                <li><strong>Upload</strong> : Gestion native Symfony</li>
                <li><strong>Authentification</strong> : Système intégré</li>
                <li><strong>Administration</strong> : Interface personnalisée</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="database-structure">
          <h2>Structure de la base de données</h2>
          <div className="database-schema">
            <pre>
{`┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│    User     │    │    Photo     │    │   Content   │
│             │    │              │    │             │
│ - id        │    │ - id         │    │ - id        │
│ - email     │    │ - title      │    │ - identifier│
│ - password  │    │ - description│    │ - title     │
│ - roles     │    │ - filename   │    │ - content   │
└─────────────┘    │ - category   │    │ - section   │
                   │ - featured   │    └─────────────┘
                   │ - created_at │
                   └──────────────┘`}
            </pre>
          </div>
        </section>

        <section className="features">
          <h2>Fonctionnalités principales</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏠</div>
              <h4>Page d'accueil</h4>
              <p>Présentation avec photos vedettes et photo d'arrière-plan</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🖼️</div>
              <h4>Galerie interactive</h4>
              <p>Affichage de toutes les photos avec filtrage par catégorie</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👤</div>
              <h4>Page À propos</h4>
              <p>Présentation du photographe, son histoire et son équipe</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📞</div>
              <h4>Page Contact</h4>
              <p>Informations de contact et heures d'ouverture</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚙️</div>
              <h4>Administration</h4>
              <p>Dashboard avec statistiques et gestion complète</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h4>Design responsive</h4>
              <p>Compatible mobile, tablette et desktop</p>
            </div>
          </div>
        </section>

        <section className="project-gallery">
          <h2>Galerie du projet</h2>
          <MasonryGallery images={[
            portfolio1, portfolio2, portfolio3, portfolio4, portfolio5,
            portfolio6, portfolio8, portfolio9
          ]} />
        </section>

        <section className="installation-guide">
          <h2>Installation rapide</h2>
          <div className="install-steps">
            <div className="step">
              <h3>1. Cloner le projet</h3>
              <div className="code-block">
                <pre>git clone https://github.com/sidypr/portfolioPhoto.git</pre>
              </div>
            </div>
            <div className="step">
              <h3>2. Installer les dépendances</h3>
              <div className="code-block">
                <pre>composer install</pre>
              </div>
            </div>
            <div className="step">
              <h3>3. Configurer la base de données</h3>
              <div className="code-block">
                <pre>php bin/console doctrine:migrations:migrate</pre>
              </div>
            </div>
            <div className="step">
              <h3>4. Créer un administrateur</h3>
              <div className="code-block">
                <pre>php bin/console app:create-admin</pre>
              </div>
            </div>
            <div className="step">
              <h3>5. Lancer le serveur</h3>
              <div className="code-block">
                <pre>symfony server:start --allow-all-ip</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="access-info">
          <h2>Accès et utilisation</h2>
          <div className="access-grid">
            <div className="access-card">
              <h3>URLs d'accès</h3>
              <ul>
                <li><strong>Local :</strong> http://localhost:8000</li>
                <li><strong>Mobile :</strong> http://192.168.1.11:8000 (même réseau WiFi)</li>
              </ul>
            </div>
            <div className="access-card">
              <h3>Identifiants administrateur</h3>
              <ul>
                <li><strong>Email :</strong> admin@portfolio.com</li>
                <li><strong>Mot de passe :</strong> admin123</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-conclusion">
          <h2>Conclusion</h2>
          <p>
            Ce projet démontre ma maîtrise de <strong>Symfony</strong> et du développement d'applications 
            web complètes. Il illustre ma capacité à créer une solution professionnelle pour la gestion 
            de contenu photographique avec une interface d'administration intuitive.
          </p>
        </section>
      </div>

      {/* Modal pour le zoom des images */}
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <button className="modal-nav modal-prev" onClick={prevImage}>&#8249;</button>
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt} 
              className="modal-image"
            />
            <button className="modal-nav modal-next" onClick={nextImage}>&#8250;</button>
            <div className="modal-info">
              <h3>{images[currentImageIndex].alt}</h3>
              <p>{images[currentImageIndex].description}</p>
              <span className="modal-counter">{currentImageIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPhotoProject; 