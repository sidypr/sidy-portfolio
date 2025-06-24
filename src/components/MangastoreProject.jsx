import React, { useState } from 'react';
import './MangastoreProject.css';
import mangastore1 from '../photo/mangastore1.png';
import mangastore2 from '../photo/mangastore2.png';
import mangastore3 from '../photo/mangastore3.png';
import mangastore4 from '../photo/mangastore4.png';
import mangastore5 from '../photo/mangastore5.png';
import mangartore6 from '../photo/mangartore6.png';
import mangastore7 from '../photo/mangastore7.png';
import mangastore8 from '../photo/mangastore8.png';
import mangastore9 from '../photo/mangastore9.png';

const MangastoreProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: mangastore1, alt: "Page d'accueil", description: "Page d'accueil avec hero section, navigation principale et présentation de la boutique" },
    { src: mangastore2, alt: "Catalogue complet", description: "Vue d'ensemble du catalogue avec tous les mangas disponibles et système de navigation" },
    { src: mangastore3, alt: "Page de connexion", description: "Interface de connexion utilisateur avec formulaire d'authentification" },
    { src: mangastore4, alt: "Page d'inscription", description: "Formulaire d'inscription pour créer un nouveau compte utilisateur" },
    { src: mangastore5, alt: "Détail d'un manga", description: "Page produit détaillée avec informations complètes, prix et bouton d'achat" },
    { src: mangartore6, alt: "Interface utilisateur", description: "Espace personnel de l'utilisateur avec gestion du profil et des commandes" },
    { src: mangastore7, alt: "Panel d'administration", description: "Interface d'administration EasyAdmin pour la gestion du site" },
    { src: mangastore8, alt: "Gestion des mangas", description: "Interface admin pour ajouter, modifier et supprimer les mangas du catalogue" },
    { src: mangastore9, alt: "Dashboard administrateur", description: "Tableau de bord avec statistiques, métriques et vue d'ensemble du site" }
  ];

  const technologies = {
    backend: [
      { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Doctrine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-original.svg' }
    ],
    frontend: [
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' }
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
  }, [isModalOpen]);

  return (
    <div className="mangastore-project">
      <div className="project-header">
        <div className="container">
          <h1 className="project-title">MangaStore</h1>
          <p className="project-subtitle">Boutique en ligne de mangas développée avec Symfony 6.4</p>
          
          <div className="project-links">
            <a href="https://github.com/sidypr/mangastore" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fab fa-github"></i> Voir le code
            </a>
            <a href="https://youtu.be/ADfDf-j4-gs" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fab fa-youtube"></i> Voir la démo
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="project-overview">
          <h2>Vue d'ensemble</h2>
          <p>
            <strong>MangaStore</strong> est une <strong>boutique en ligne de mangas</strong> développée avec 
            <strong> Symfony 6.4</strong>, offrant une plateforme e-commerce complète pour la vente de mangas.
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
                <li><strong>Framework</strong> : Symfony 6.4 (LTS)</li>
                <li><strong>PHP</strong> : 8.4.6</li>
                <li><strong>Base de données</strong> : MySQL 8.0</li>
                <li><strong>ORM</strong> : Doctrine</li>
                <li><strong>Administration</strong> : EasyAdmin 4</li>
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
                <li><strong>CSS Framework</strong> : Bootstrap 5.3.6</li>
                <li><strong>JavaScript</strong> : React 18.2.0 + Stimulus Bridge</li>
                <li><strong>Build Tool</strong> : Webpack Encore</li>
                <li><strong>Animations</strong> : Framer Motion</li>
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
                <li><strong>Paiements</strong> : Stripe API</li>
                <li><strong>Pagination</strong> : KnpPaginatorBundle</li>
                <li><strong>Emails</strong> : Symfony Mailer</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="database-structure">
          <h2>Structure de la base de données</h2>
          <div className="database-schema">
            <pre>
{`┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Category  │────│   Product    │────│ OrderDetail │
│             │    │              │    │             │
│ - id        │    │ - id         │    │ - id        │
│ - name      │    │ - name       │    │ - quantity  │
│ - slug      │    │ - price      │    │ - price     │
└─────────────┘    │ - stock      │    └─────────────┘
                   │ - image      │           │
                   │ - description│           │
                   └──────────────┘           │
                                              │
┌─────────────┐                              │
│    User     │──────────────────────────────┘
│             │                               
│ - id        │    ┌──────────────┐          
│ - email     │────│    Order     │          
│ - password  │    │              │          
│ - roles     │    │ - id         │          
└─────────────┘    │ - total      │          
                   │ - status     │          
                   │ - created_at │          
                   └──────────────┘`}
            </pre>
          </div>
        </section>

        <section className="features">
          <h2>Fonctionnalités principales</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🛒</div>
              <h4>E-commerce complet</h4>
              <p>Catalogue de produits, panier, commandes et gestion des stocks</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💳</div>
              <h4>Paiement sécurisé</h4>
              <p>Intégration Stripe pour des transactions sécurisées</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👤</div>
              <h4>Gestion utilisateurs</h4>
              <p>Inscription, connexion et gestion des profils</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚙️</div>
              <h4>Interface d'administration</h4>
              <p>Dashboard administrateur avec EasyAdmin</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h4>Responsive Design</h4>
              <p>Interface adaptée à tous les écrans</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h4>Recherche et filtres</h4>
              <p>Recherche avancée par catégorie et critères</p>
            </div>
          </div>
        </section>

        <section className="gallery">
          <h2>Galerie du projet</h2>
          <div className="gallery-container">
            <div className="main-image-container">
              <img 
                src={images[currentImageIndex].src} 
                alt={images[currentImageIndex].alt}
                className="main-gallery-image"
                onClick={() => openModal(currentImageIndex)}
              />
              <div className="main-image-info">
                <h4>{images[currentImageIndex].alt}</h4>
                <p>{images[currentImageIndex].description}</p>
              </div>
              <div className="gallery-navigation">
                <button className="gallery-nav-btn prev" onClick={prevImage}>❮</button>
                <button className="gallery-nav-btn next" onClick={nextImage}>❯</button>
              </div>
            </div>
            <div className="thumbnails-container">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="project-conclusion">
          <h2>Conclusion</h2>
          <p>
            Ce projet démontre ma maîtrise de <strong>Symfony</strong> et du développement d'applications 
            e-commerce complètes. Il illustre ma capacité à intégrer des technologies modernes pour créer 
            une expérience utilisateur fluide et sécurisée.
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

export default MangastoreProject; 