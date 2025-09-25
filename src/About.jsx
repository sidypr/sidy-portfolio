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
          <p className="hero-subtitle">Développeur web passionné, créateur d'expériences digitales modernes</p>
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
              <p>Bonjour, je m'appelle Sidy Djimbira, développeur web basé à Paris. Passionné par les technologies web modernes, je me spécialise dans la création d'interfaces utilisateur performantes et intuitives.</p>
              <p>Après une formation rigoureuse, j'ai acquis une solide maîtrise des langages du web et des outils modernes pour concevoir, coder et déployer des sites performants et accessibles.</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="about-mission">
            <h2>Mon approche</h2>
            <p>Je combine créativité et rigueur technique pour créer des solutions web innovantes.</p>
            
            <div className="mission-cards">
              <div className="mission-card">
                <div className="mission-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Développement moderne</h3>
                <p>Utilisation des dernières technologies et frameworks pour créer des applications web performantes et évolutives.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon"><i className="fas fa-palette"></i></div>
                <h3>Design centré utilisateur</h3>
                <p>Conception d'interfaces intuitives et accessibles qui offrent une expérience utilisateur exceptionnelle.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon"><i className="fas fa-bolt"></i></div>
                <h3>Performance optimisée</h3>
                <p>Développement de solutions rapides et efficaces avec un focus sur l'optimisation et les bonnes pratiques.</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h2>Compétences techniques</h2>
            <p>Technologies et outils que je maîtrise pour créer des projets web de qualité.</p>
            
            <div className="skills-grid">
              {allSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="about-cta">
            <h2>Travaillons ensemble</h2>
            <p>Vous avez un projet en tête ? Je serais ravi de discuter de vos besoins et de vous aider à les concrétiser.</p>
            <a href="mailto:sidy.djimbira@gmail.com" className="cta-button">Me contacter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;