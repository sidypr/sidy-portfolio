import React from 'react';
import './About.css';
import sidyNoir from './photo/sidyNoir.jpeg';

const About = () => {
  const allSkills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', name: 'Tailwind' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg', name: 'Bootstrap' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', name: 'PHP' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', name: 'Symfony' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VS Code' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React Native' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', name: 'Expo' }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">À propos de moi</h1>
          <p className="hero-subtitle">Découvrez ma passion pour le développement web et mon parcours professionnel.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-main">
        <div className="about-wrapper">
          {/* About Story Section */}
          <div className="about-story">
            <div className="story-image">
              <img src={sidyNoir} alt="Sidy Djimbira" />
            </div>
            <div className="story-content">
              <h2>Mon parcours</h2>
              <p>Bonjour, je m'appelle Sidy Djimbira, développeur web basé à Noisy-le-Grand. Passionné par le développement web depuis plusieurs années, je me spécialise dans la création d'interfaces modernes et performantes.</p>
              <p>Après une formation rigoureuse, j'ai acquis une solide maîtrise des technologies web modernes pour concevoir, développer et déployer des applications web de qualité professionnelle.</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="about-mission">
            <h2>Mon approche</h2>
            <p>Je m'engage à fournir des solutions web exceptionnelles et adaptées à vos besoins.</p>
            
            <div className="mission-cards">
              <div className="mission-card">
                <div className="mission-icon">💻</div>
                <h3>Code de qualité</h3>
                <p>J'utilise les meilleures pratiques et les technologies les plus récentes pour créer des applications robustes, maintenables et performantes.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🎨</div>
                <h3>Design moderne</h3>
                <p>Je crée des interfaces utilisateur intuitives et esthétiques, en alliant créativité et expérience utilisateur optimale.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🚀</div>
                <h3>Performance</h3>
                <p>Je mets l'accent sur l'optimisation et les performances pour garantir une expérience utilisateur fluide et rapide.</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h2>Mes compétences techniques</h2>
            <p>Technologies et outils que je maîtrise.</p>
            
            <div className="skills-grid">
              {allSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Preview */}
          <div className="projects-preview">
            <h2>Mes projets récents</h2>
            <p>Découvrez quelques-unes de mes réalisations.</p>
            
            <div className="projects-grid">
              <div className="project-item">
                <div className="project-icon">🛒</div>
                <h3>MangaStore</h3>
                <p>E-commerce Symfony avec design moderne et fonctionnalités complètes.</p>
              </div>
              
              <div className="project-item">
                <div className="project-icon">📱</div>
                <h3>Spotify Mobile</h3>
                <p>Application React Native avec intégration API Spotify et interface intuitive.</p>
              </div>
              
              <div className="project-item">
                <div className="project-icon">📸</div>
                <h3>Portfolio Photo</h3>
                <p>Galerie photographique avec système d'administration et design responsive.</p>
              </div>
              
              <div className="project-item">
                <div className="project-icon">⚡</div>
                <h3>PokéBuild API</h3>
                <p>Application React avec intégration PokéAPI et gestion d'équipes Pokémon.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="about-cta">
            <h2>Prêt à collaborer ?</h2>
            <p>Contactez-moi dès aujourd'hui pour discuter de votre projet web.</p>
            <button className="cta-button">ME CONTACTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 