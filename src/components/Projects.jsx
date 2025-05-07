import React from 'react';
import './Projects.css';
import pokedexImg from '../photo/POKEDEX.png';
import spotifyImg from '../photo/API SPOTIFY.png';
import portfolioImg from '../photo/PORTFOLIO.png';

const projects = [
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
  },
  {
    title: "portfolioPhoto (Symfony)",
    description: "Projet solo : Application web de gestion de portfolio photographique : galerie, filtrage, espace admin, responsive, authentification sécurisée.",
    image: portfolioImg,
    link: "https://github.com/sidypr/portfolioPhoto",
    video: "https://youtu.be/IC8knROABTA",
    tags: ["Symfony", "PHP", "Galerie photo"]
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
              {project.link && (
                <a href={project.link} className="project-link-btn" target="_blank" rel="noopener noreferrer">Voir le projet</a>
              )}
              {project.video && (
                <a href={project.video} className="project-link-btn video" target="_blank" rel="noopener noreferrer">Voir la vidéo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 