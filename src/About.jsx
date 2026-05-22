import React from 'react';
import './About.css';
import sidyPhoto from './photo/sidyNoir1.jpeg';

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

  const frontendSkills = allSkills.filter(s => ['HTML5','CSS3','JavaScript','TypeScript','React','Tailwind','Bootstrap'].includes(s.name));
  const backendSkills = allSkills.filter(s => ['PHP','Symfony','MySQL','Node.js'].includes(s.name));
  const mobileSkills = allSkills.filter(s => ['React Native','Expo'].includes(s.name));
  const toolsSkills = allSkills.filter(s => ['Figma','Git','GitHub','VS Code'].includes(s.name));

  return (
    <div className="about-container fadeIn">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">À Propos</h1>
          <div className="about-cards">
            <div className="about-card fadeInUp">
              <div className="card-header">
                <h3>Présentation</h3>
              </div>
              <div className="card-content presentation-content">
                <div className="presentation-text">
                  <p>Bonjour, je m'appelle Sidy Djimbira, développeur web basé à Paris. Je suis passionné par le développement web et actuellement à la recherche de ma première opportunité professionnelle en tant que développeur web ou intégrateur web.</p>
                  <p>Après une formation rigoureuse, j'ai acquis une solide maîtrise des langages du web et des outils modernes pour concevoir, coder et déployer des sites performants et accessibles.</p>
                </div>
                <div className="presentation-photo">
                  <img alt="Sidy Djimbira" src={sidyPhoto} />
                </div>
              </div>
            </div>

            <div className="about-card fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="card-header">
                <h3>Compétences Techniques</h3>
              </div>
              <div className="card-content">
                <div className="skills-grid">
                  <div className="skills-column">
                    <h4>Frontend</h4>
                    <div className="skills-row">
                      {frontendSkills.map((skill, i) => (
                        <div className="tech-logo" key={`fe-${i}`}>
                          <img src={skill.icon} alt={skill.name} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skills-column">
                    <h4>Backend</h4>
                    <div className="skills-row">
                      {backendSkills.map((skill, i) => (
                        <div className="tech-logo" key={`be-${i}`}>
                          <img src={skill.icon} alt={skill.name} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skills-column">
                    <h4>Mobile</h4>
                    <div className="skills-row">
                      {mobileSkills.map((skill, i) => (
                        <div className="tech-logo" key={`mo-${i}`}>
                          <img src={skill.icon} alt={skill.name} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skills-column">
                    <h4>Outils</h4>
                    <div className="skills-row">
                      {toolsSkills.map((skill, i) => (
                        <div className="tech-logo" key={`to-${i}`}>
                          <img src={skill.icon} alt={skill.name} />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Autres Compétences supprimée */}

            {/* Section Objectif Professionnel supprimée à la demande */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 