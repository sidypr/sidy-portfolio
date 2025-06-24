import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import mangastoreImg from '../photo/MANGASTORE.png';
import pokedexImg from '../photo/POKEDEX.png';
import spotifyImg from '../photo/API SPOTIFY.png';
import portfolioImg from '../photo/PORTFOLIO.png';

const projects = [
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
  {
    title: "Spotify Music Explorer",
    description: "Projet solo : Découverte musicale interactive avec l'API Spotify : recherche d'artistes, albums, écoute de previews et gestion de playlists.",
    image: spotifyImg,
    link: "https://tourmaline-licorice-6a583d.netlify.app/",
    tags: ["React", "API Spotify", "OAuth"]
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1 className="projects-title">PROJETS</h1>
        <p className="projects-subtitle">Découvrez mes dernières réalisations</p>
      </header>
      <div className="projects-gallery">
        {projects.map((project, idx) => (
          <div className="project-block" key={idx}>
            {project.isInternal ? (
              <Link to={project.link} className="project-card-link">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                  <h2 className="project-block-title">{project.title}</h2>
                  <p className="project-block-desc">{project.description}</p>
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span className="project-tag" key={i}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h2 className="project-block-title">{project.title}</h2>
              <p className="project-block-desc">{project.description}</p>
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
              )}
                </div>
              </a>
            )}
            <div className="project-links">
              {project.externalLink && (
                <a href={project.externalLink} className="project-link-btn secondary" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Code source</a>
              )}
              {project.video && (
                <a href={project.video} className="project-link-btn secondary video" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Voir la vidéo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 