import React from 'react';
import './Projects.css';
import mangastoreImg from '../photo/MANGASTORE.png';
import pokedexImg from '../photo/POKEDEX.png';
import spotifyImg from '../photo/API SPOTIFY.png';
import spotifyMobileImg from '../photo/image &spotifyappmobile_0447.PNG';
import portfolioImg from '../photo/PORTFOLIO.png';
import CircularGallery from './CircularGallery/CircularGallery';

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
  {
    title: "Spotify Music Explorer",
    description: "Projet solo : Découverte musicale interactive avec l'API Spotify : recherche d'artistes, albums, écoute de previews et gestion de playlists.",
    image: spotifyImg,
    link: "https://tourmaline-licorice-6a583d.netlify.app/",
    tags: ["React", "API Spotify", "OAuth"]
  }
];

const Projects = () => {
  const galleryItems = projects.map((p)=>({
    image:p.image,
    title:p.title,
    link:p.link,
    isInternal:p.isInternal
  }));

  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1 className="projects-title">PROJETS</h1>
        <p className="projects-subtitle">Découvrez mes dernières réalisations</p>
      </header>
      <CircularGallery items={galleryItems} bend={2} borderRadius={0.09} itemScale={1.8} />
    </div>
  );
};

export default Projects; 