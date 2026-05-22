import React, { useCallback, useRef } from 'react';
import './Projects.css';
import mangastoreImg from '../photo/MANGASTORE.png';
import pokedexImg from '../photo/POKEDEX.png';
import spotifyMobileImg from '../photo/image &spotifyappmobile_0447.PNG';
import portfolioImg from '../photo/PORTFOLIO.png';
import DomeGallery from '../DomeGallery';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Spotify Stats Mobile",
    description: "Application mobile React Native développée avec Expo qui permet aux utilisateurs de visualiser leurs statistiques d'écoute Spotify et gérer leurs playlists avec une interface moderne.",
    image: spotifyMobileImg,
    link: "/projects/spotify-mobile",
    isInternal: true,
    externalLink: "https://github.com/sidypr/stats-Spotify-mob",
    video: "https://youtu.be/YOUR_VIDEO_ID",
    tags: ["React Native", "Expo", "Spotify API", "TypeScript"]
  },
  {
    title: "Mangastore",
    description: "Projet solo : Site e-commerce de mangas avec un design moderne, une interface intuitive et une expérience utilisateur optimisée. Développé avec Symfony et un style épuré.",
    image: mangastoreImg,
    link: "/projects/mangastore",
    isInternal: true,
    externalLink: "https://github.com/sidypr/mangastore",
    video: "https://youtu.be/ADfDf-j4-gs",
    tags: ["Symfony", "E-commerce", "Design UI/UX"]
  },
  {
    title: "Portfolio Photo",
    description: "Projet solo : Application web de gestion de portfolio photographique avec galerie interactive, système d'administration complet et interface responsive moderne.",
    image: portfolioImg,
    link: "/projects/portfolio-photo",
    isInternal: true,
    externalLink: "https://github.com/sidypr/portfolioPhoto",
    video: "https://youtu.be/IC8knROABTA",
    tags: ["Symfony", "PHP", "SQLite", "Administration"]
  },
  {
    title: "PokeBuild API",
    description: "Projet solo : Application web moderne pour explorer les Pokémon, créer des équipes et consulter des statistiques grâce à l'intégration de l'API PokéAPI.",
    image: pokedexImg,
    link: "https://stellular-dasik-5423ce.netlify.app/",
    tags: ["React", "API REST", "Pokémon"]
  },
];

const Projects = () => {
  const cardsRef = useRef(null);

  const scrollToCards = useCallback(() => {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const mainProjectImages = projects.map((p) => ({
    src: p.image,
    alt: p.title,
  }));

  const additionalImages = [
    { src: require('../photo/portfolio1.png'), alt: 'Portfolio Photo - Interface' },
    { src: require('../photo/portfolio2.png'), alt: 'Portfolio Photo - Galerie' },
    { src: require('../photo/portfolio3.png'), alt: 'Portfolio Photo - Design' },
    { src: require('../photo/mangastore1.png'), alt: 'MangaStore - Interface' },
    { src: require('../photo/mangastore2.png'), alt: 'MangaStore - Produits' },
    { src: require('../photo/mangastore3.png'), alt: 'MangaStore - Panier' },
    { src: require('../photo/image &spotifyappmobile_0441.PNG'), alt: 'Spotify Mobile - Écran 1' },
    { src: require('../photo/image &spotifyappmobile_0442.PNG'), alt: 'Spotify Mobile - Écran 2' },
    { src: require('../photo/image &spotifyappmobile_0443.PNG'), alt: 'Spotify Mobile - Écran 3' },
    { src: require('../photo/image &spotifyappmobile_0444.PNG'), alt: 'Spotify Mobile - Écran 4' },
    { src: require('../photo/image &spotifyappmobile_0445.PNG'), alt: 'Spotify Mobile - Écran 5' },
    { src: require('../photo/image &spotifyappmobile_0446.PNG'), alt: 'Spotify Mobile - Écran 6' },
    { src: require('../photo/image &spotifyappmobile_0448.PNG'), alt: 'Spotify Mobile - Écran 7' },
    { src: require('../photo/image &spotifyappmobile_0449.PNG'), alt: 'Spotify Mobile - Écran 8' },
    { src: require('../photo/image &spotifyappmobile_0450.PNG'), alt: 'Spotify Mobile - Écran 9' },
    { src: require('../photo/image &spotifyappmobile_0451.PNG'), alt: 'Spotify Mobile - Écran 10' },
    { src: require('../photo/image &spotifyappmobile_0452.PNG'), alt: 'Spotify Mobile - Écran 11' },
    { src: require('../photo/image &spotifyappmobile_0453.PNG'), alt: 'Spotify Mobile - Écran 12' },
    { src: require('../photo/image &spotifyappmobile_0454.PNG'), alt: 'Spotify Mobile - Écran 13' },
  ];

  const galleryItems = [...mainProjectImages, ...additionalImages];

  return (
    <div className="projects-page page-inner">
      <header className="projects-header">
        <h1 className="projects-title inner-title">Projets</h1>
        <p className="projects-subtitle inner-subtitle">Découvrez mes dernières réalisations</p>
      </header>

      <div className="projects-dome-section">
        <DomeGallery images={galleryItems} />
        <div className="projects-dome-fade" aria-hidden="true" />
      </div>

      <button
        type="button"
        className="projects-scroll-hint"
        onClick={scrollToCards}
        aria-label="Faire défiler vers les fiches projets détaillées"
      >
        <span className="projects-scroll-hint__label">Faites défiler pour voir les fiches projets</span>
        <span className="projects-scroll-hint__chevrons" aria-hidden="true">
          <i className="fas fa-chevron-down" />
          <i className="fas fa-chevron-down" />
        </span>
      </button>

      <p className="projects-intro">
        Explorez la galerie interactive ci-dessus, puis consultez les cartes détaillées ci-dessous pour chaque réalisation.
      </p>

      <h2 id="projects-cards" ref={cardsRef} className="projects-cards-title inner-label">
        Projets détaillés
      </h2>

      <div className="projects-gallery">
        {projects.map((project, index) => (
          project.isInternal ? (
            <Link key={index} to={project.link} className="project-card-link">
              <div className="project-block">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                  <h3 className="project-block-title">{project.title}</h3>
                  <p className="project-block-desc">{project.description}</p>
                  {project.tags?.length > 0 && (
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
              <div className="project-block">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                  <h3 className="project-block-title">{project.title}</h3>
                  <p className="project-block-desc">{project.description}</p>
                  {project.tags?.length > 0 && (
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default Projects;
