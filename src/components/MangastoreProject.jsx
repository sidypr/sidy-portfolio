import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MangastoreProject.css';
import MasonryGallery from './MasonryGallery/MasonryGallery';
import mangastore1 from '../photo/mangastore1.png';
import mangastore2 from '../photo/mangastore2.png';
import mangastore3 from '../photo/mangastore3.png';
import mangastore4 from '../photo/mangastore4.png';
import mangastore5 from '../photo/mangastore5.png';
import mangastore6 from '../photo/mangartore6.png';
import mangastore7 from '../photo/mangastore7.png';
import mangastore8 from '../photo/mangastore8.png';
import mangastore9 from '../photo/mangastore9.png';
import headerImg from '../photo/MANGASTORE.png';

const MangastoreProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: mangastore1, alt: "Page d'accueil", description: "Page d'accueil avec hero section, navigation principale et présentation de la boutique" },
    { src: mangastore2, alt: "Catalogue complet", description: "Vue d'ensemble du catalogue avec tous les mangas disponibles et système de navigation" },
    { src: mangastore3, alt: "Page de connexion", description: "Interface de connexion utilisateur avec formulaire d'authentification" },
    { src: mangastore4, alt: "Page d'inscription", description: "Formulaire d'inscription pour créer un nouveau compte utilisateur" },
    { src: mangastore5, alt: "Détail d'un manga", description: "Page produit détaillée avec informations complètes, prix et bouton d'achat" },
    { src: mangastore6, alt: "Interface utilisateur", description: "Espace personnel de l'utilisateur avec gestion du profil et des commandes" },
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
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal, nextImage, prevImage]);

  return (
    <div className="mangastore-project page-inner">
      <div className="project-header" style={{backgroundImage:`url(${headerImg})`}}>
        <div className="container">
          <Link to="/projects" className="back-link">← Retour aux projets</Link>
          <h1 className="project-title">MangaStore</h1>
          <p className="project-subtitle">Boutique en ligne de mangas développée avec Symfony 6.4</p>
          
          <div className="project-links">
            <a href="https://github.com/sidypr/mangastore" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fab fa-github"></i> Code source
            </a>
            <a href="https://youtu.be/ADfDf-j4-gs" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fab fa-youtube"></i> Voir la vidéo
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="project-overview">
          <h2>Vue d'ensemble</h2>
          <p>
            <strong>MangaStore</strong> est une <strong>boutique en ligne de mangas</strong> développée avec 
            <strong> Symfony 6.4</strong>, offrant une plateforme e-commerce complète pour la vente de mangas 
            avec un système d'authentification sécurisé, un panier d'achat intégré et une interface d'administration moderne.
          </p>
        </section>

        {/* Architecture technique */}
        <section className="architecture-section">
          <h2>Architecture technique</h2>
          <div className="architecture-grid">
            <div className="arch-card">
              <h3>Framework & Backend</h3>
              <ul>
                <li><strong>Symfony 6.4 LTS</strong> - Framework PHP moderne</li>
                <li><strong>PHP 8.4.6</strong> - Langage serveur</li>
                <li><strong>Doctrine ORM</strong> - Gestion base de données</li>
                <li><strong>EasyAdmin 4</strong> - Interface d'administration</li>
                <li><strong>Symfony Security</strong> - Authentification</li>
              </ul>
            </div>
            <div className="arch-card">
              <h3>Base de données</h3>
              <ul>
                <li><strong>MySQL 8.0</strong> - SGBD relationnel</li>
                <li><strong>Migrations Doctrine</strong> - Versioning BDD</li>
                <li><strong>Fixtures</strong> - Données de démonstration</li>
                <li><strong>Relations complexes</strong> - One-to-Many, Many-to-Many</li>
              </ul>
            </div>
            <div className="arch-card">
              <h3>Frontend & Interface</h3>
              <ul>
                <li><strong>Bootstrap 5.3.6</strong> - Framework CSS</li>
                <li><strong>React 18.2.0</strong> - Composants dynamiques</li>
                <li><strong>Webpack Encore</strong> - Build assets</li>
                <li><strong>Stimulus Bridge</strong> - Intégration JS</li>
              </ul>
            </div>
            <div className="arch-card">
              <h3>Services externes</h3>
              <ul>
                <li><strong>Stripe API</strong> - Paiements sécurisés</li>
                <li><strong>Symfony Mailer</strong> - Envoi d'emails</li>
                <li><strong>KnpPaginatorBundle</strong> - Pagination</li>
                <li><strong>Framer Motion</strong> - Animations</li>
              </ul>
            </div>
          </div>
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
              <h3>Outils & Services</h3>
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
                <li><strong>Versioning</strong> : Git & GitHub</li>
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
          <div className="db-info">
            <h3>Entités principales</h3>
            <div className="entities-grid">
              <div className="entity-card">
                <h4>User</h4>
                <p>Gestion des utilisateurs avec authentification Symfony Security</p>
              </div>
              <div className="entity-card">
                <h4>Product</h4>
                <p>Catalogue de mangas avec images, prix et descriptions</p>
              </div>
              <div className="entity-card">
                <h4>Category</h4>
                <p>Classification des mangas par genres et thématiques</p>
              </div>
              <div className="entity-card">
                <h4>Order</h4>
                <p>Gestion des commandes avec statuts et historique</p>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>Fonctionnalités principales</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon"><i className="fas fa-shopping-cart"></i></div>
              <h4>E-commerce complet</h4>
              <p>Catalogue de produits, panier, commandes et gestion des stocks en temps réel</p>
            </div>
            <div className="feature">
              <div className="feature-icon"><i className="fas fa-credit-card"></i></div>
              <h4>Paiement sécurisé</h4>
              <p>Intégration Stripe pour des transactions sécurisées avec cartes bancaires</p>
            </div>
            <div className="feature">
              <div className="feature-icon"><i className="fas fa-user"></i></div>
              <h4>Gestion utilisateurs</h4>
              <p>Inscription, connexion, profils utilisateurs et historique des commandes</p>
            </div>
            <div className="feature">
              <div className="feature-icon"><i className="fas fa-cog"></i></div>
              <h4>Interface d'administration</h4>
              <p>Dashboard administrateur complet avec EasyAdmin pour gérer le site</p>
            </div>
            <div className="feature">
              <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
              <h4>Responsive Design</h4>
              <p>Interface adaptée à tous les écrans : mobile, tablette et desktop</p>
            </div>
            <div className="feature">
              <div className="feature-icon"><i className="fas fa-search"></i></div>
              <h4>Recherche et filtres</h4>
              <p>Recherche avancée par catégorie, prix et critères multiples</p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="installation-section">
          <h2>Installation et démarrage</h2>
          <div className="install-steps">
            <div className="step-card">
              <h3>1. Clonage du projet</h3>
              <div className="code-block">
                <pre>
{`git clone https://github.com/sidypr/mangastore.git
cd mangastore`}
                </pre>
              </div>
            </div>
            <div className="step-card">
              <h3>2. Installation des dépendances</h3>
              <div className="code-block">
                <pre>
{`# Dépendances PHP
composer install

# Dépendances Node.js
npm install`}
                </pre>
              </div>
            </div>
            <div className="step-card">
              <h3>3. Configuration de la base de données</h3>
              <div className="code-block">
                <pre>
{`# Configurer .env.local
DATABASE_URL="mysql://user:password@127.0.0.1:3306/mangastore"

# Créer la base de données
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load`}
                </pre>
              </div>
            </div>
            <div className="step-card">
              <h3>4. Lancement du serveur</h3>
              <div className="code-block">
                <pre>
{`# Compilation des assets

npm run build

# Démarrage du serveur Symfony
symfony server:start`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="project-gallery">
          <h2>Galerie du projet</h2>
          <MasonryGallery images={[
            mangastore1, mangastore2, mangastore3, mangastore4, mangastore5,
            mangastore6, mangastore7, mangastore8, mangastore9
          ]} />
        </section>

        {/* Fonctionnalités avancées */}
        <section className="advanced-features">
          <h2>🔥 Fonctionnalités avancées</h2>
          <div className="advanced-grid">
            <div className="advanced-card">
              <h3>Sécurité</h3>
              <ul>
                <li>Authentification Symfony Security</li>
                <li>Hashage des mots de passe avec Argon2i</li>
                <li>Protection CSRF sur tous les formulaires</li>
                <li>Validation côté serveur et client</li>
                <li>Roles et permissions utilisateurs</li>
              </ul>
            </div>
            <div className="advanced-card">
              <h3>Performance</h3>
              <ul>
                <li>Pagination optimisée avec KnpPaginator</li>
                <li>Cache Symfony pour les données statiques</li>
                <li>Lazy loading des images produits</li>
                <li>Compression des assets avec Webpack</li>
                <li>Indexation base de données optimisée</li>
              </ul>
            </div>
            <div className="advanced-card">
              <h3>UX/UI</h3>
              <ul>
                <li>Interface responsive Bootstrap 5</li>
                <li>Animations fluides avec Framer Motion</li>
                <li>Design moderne et intuitif</li>
                <li>Feedback utilisateur en temps réel</li>
                <li>Messages flash pour les actions</li>
              </ul>
            </div>
            <div className="advanced-card">
              <h3>Administration</h3>
              <ul>
                <li>Dashboard EasyAdmin personnalisé</li>
                <li>CRUD complet pour tous les modèles</li>
                <li>Statistiques de vente en temps réel</li>
                <li>Gestion des stocks et inventaire</li>
                <li>Export des données en CSV/Excel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* État du projet */}
        <section className="project-status">
          <h2>État du projet</h2>
          <div className="status-card">
            <div className="status-badge">Projet complet et fonctionnel</div>
            <div className="status-grid">
              <div className="status-item">
                <h4>Frontend complet</h4>
                <p>Interface utilisateur moderne et responsive</p>
              </div>
              <div className="status-item">
                <h4>Backend robuste</h4>
                <p>API Symfony avec architecture MVC</p>
              </div>
              <div className="status-item">
                <h4>E-commerce fonctionnel</h4>
                <p>Panier, commandes et paiements Stripe</p>
              </div>
              <div className="status-item">
                <h4>Administration complète</h4>
                <p>Interface admin EasyAdmin opérationnelle</p>
              </div>
            </div>
            <p className="status-description">
              <strong>MangaStore</strong> est un projet e-commerce complet qui démontre ma maîtrise 
              de Symfony et du développement full-stack. Il illustre ma capacité à créer des applications 
              web modernes, sécurisées et scalables avec une expérience utilisateur optimisée.
            </p>
          </div>
        </section>

        <section className="project-conclusion">
          <h2>Conclusion</h2>
          <p>
            Ce projet démontre ma maîtrise de <strong>Symfony</strong> et du développement d'applications 
            e-commerce complètes. Il illustre ma capacité à intégrer des technologies modernes pour créer 
            une expérience utilisateur fluide et sécurisée, avec une architecture robuste et évolutive.
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