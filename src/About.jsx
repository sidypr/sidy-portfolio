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
  const skillsGroups = [];
  for (let i = 0; i < allSkills.length; i += 6) {
    skillsGroups.push(allSkills.slice(i, i + 6));
  }

  return (
    <div className="about-container fadeIn">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title" style={{fontFamily: '"Cormorant Garamond", serif'}}>À Propos</h1>
          <div className="about-cards">
            <div className="about-card fadeInUp">
              <div className="card-header">
                <h3>Présentation</h3>
              </div>
              <div className="card-content presentation-content" style={{fontFamily: 'Inter, sans-serif'}}>
                <div className="presentation-text">
                  <p>Bonjour, je m'appelle Sidy Djimbira, développeur web basé à Noisy-le-Grand. Je suis passionné par le développement web et actuellement à la recherche de ma première opportunité professionnelle en tant que développeur web ou intégrateur web.</p>
                  <p>Après une formation rigoureuse, j'ai acquis une solide maîtrise des langages du web et des outils modernes pour concevoir, coder et déployer des sites performants et accessibles.</p>
                </div>
                <div className="presentation-photo">
                  <img alt="Sidy Djimbira" src={sidyNoir} />
                </div>
              </div>
            </div>

            <div className="about-card fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="card-header">
                <h3>Compétences Techniques</h3>
              </div>
              <div className="card-content">
                <div className="skills-grid">
                  {skillsGroups.map((group, i) => (
                    <div className="skills-row" key={i}>
                      {group.map((skill, j) => (
                        <div className="tech-logo" key={j}>
                          <img src={skill.icon} alt={skill.name} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-card fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="card-header">
                <h3>Autres Compétences</h3>
              </div>
              <div className="card-content" style={{fontFamily: 'Inter, sans-serif'}}>
                <ul className="skills-list">
                  <li>Création de sites web de A à Z</li>
                  <li>Mise en ligne et hébergement de projets</li>
                  <li>Optimisation responsive et accessibilité</li>
                  <li>Gestion de projet et méthodologie agile</li>
                  <li>Intégration de maquettes</li>
                </ul>
              </div>
            </div>

            <div className="about-card fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="card-header">
                <h3>Objectif Professionnel</h3>
              </div>
              <div className="card-content" style={{fontFamily: 'Inter, sans-serif'}}>
                <p>Je cherche à intégrer une équipe dynamique qui me permettra de continuer à progresser tout en apportant mes compétences techniques, ma rigueur et ma motivation. Curieux, autonome et à l'écoute, je suis prêt à relever tous les défis techniques et créatifs !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 