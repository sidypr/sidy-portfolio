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
              <h2>Mon histoire</h2>
              <p>Bonjour, je m'appelle Sidy Djimbira, développeur web basé à Noisy-le-Grand. Je suis passionné par le développement web et actuellement à la recherche de ma première opportunité professionnelle en tant que développeur web ou intégrateur web.</p>
              <p>Après une formation rigoureuse, j'ai acquis une solide maîtrise des langages du web et des outils modernes pour concevoir, coder et déployer des sites performants et accessibles.</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="about-mission">
            <h2>Ma mission</h2>
            <p>Je m'engage à fournir des solutions web exceptionnelles.</p>
            
            <div className="mission-cards">
              <div className="mission-card">
                <div className="mission-icon">💻</div>
                <h3>Qualité exceptionnelle</h3>
                <p>J'utilise des équipements professionnels et des techniques avancées pour créer des images de haute qualité qui dépassent vos attentes.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🎨</div>
                <h3>Passion et créativité</h3>
                <p>J'explore constamment de nouvelles idées et perspectives pour créer des solutions uniques et innovantes qui se démarquent.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">🤝</div>
                <h3>Service client</h3>
                <p>Je mets l'accent sur un service personnalisé et m'efforce de dépasser les attentes de mes clients à chaque étape du processus.</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <h2>Mes compétences techniques</h2>
            <p>Rencontrez mes technologies de prédilection.</p>
            
            <div className="skills-grid">
              {allSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="about-cta">
            <h2>Prêt à travailler avec moi ?</h2>
            <p>Contactez-moi dès aujourd'hui pour discuter de votre projet web.</p>
            <button className="cta-button">ME CONTACTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 