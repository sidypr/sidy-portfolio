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
          <h1 className="hero-title">À propos de nous</h1>
          <p className="hero-subtitle">Découvrez notre passion pour la photographie et notre équipe de professionnels.</p>
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
              <h2>Notre histoire</h2>
              <p>Depuis notre création en 2010, Portfolio Photo s'est engagé à offrir des services de photographie de la plus haute qualité.</p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="about-mission">
            <h2>Notre mission</h2>
            <p>Nous nous engageons à fournir des services de photographie exceptionnels.</p>
            
            <div className="mission-cards">
              <div className="mission-card">
                <div className="mission-icon">📷</div>
                <h3>Qualité exceptionnelle</h3>
                <p>Nous utilisons des équipements professionnels et des techniques avancées pour créer des images de haute qualité qui dépassent vos attentes.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">💖</div>
                <h3>Passion et créativité</h3>
                <p>Nous explorons constamment de nouvelles idées et perspectives pour créer des images uniques qui se démarquent.</p>
              </div>
              
              <div className="mission-card">
                <div className="mission-icon">👥</div>
                <h3>Service client</h3>
                <p>Nous mettons l'accent sur un service personnalisé et nous efforçons de dépasser les attentes de nos clients à chaque étape du processus.</p>
              </div>
            </div>
          </div>

          {/* Skills Section - Team */}
          <div className="about-skills">
            <h2>Notre équipe</h2>
            <p>Rencontrez nos photographes professionnels.</p>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src={sidyNoir} alt="Membre de l'équipe 1" />
                </div>
                <h3>Membre de l'équipe 1</h3>
                <p>Description du membre 1</p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src={sidyNoir} alt="Membre de l'équipe 2" />
                </div>
                <h3>Membre de l'équipe 2</h3>
                <p>Description du membre 2</p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src={sidyNoir} alt="Membre de l'équipe 3" />
                </div>
                <h3>Membre de l'équipe 3</h3>
                <p>Description du membre 3</p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <div className="placeholder-icon">🏔️</div>
                </div>
                <h3>Membre de l'équipe 4</h3>
                <p>Description du membre 4</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="about-cta">
            <h2>Prêt à travailler avec nous ?</h2>
            <p>Contactez-nous dès aujourd'hui pour discuter de votre projet photographique.</p>
            <button className="cta-button">CONTACTEZ-NOUS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 