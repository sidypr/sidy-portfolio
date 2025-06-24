import React from 'react';
import './About.css';
import sidyNoir from './photo/sidyNoir.jpeg';

const About = () => {
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
                  <div className="skill-category">
                    <h4>Front-end</h4>
                    <div className="tech-logos">
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                        <span>HTML5</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                        <span>CSS3</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                        <span>JavaScript</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <span>React</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" />
                        <span>Tailwind</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                        <span>TypeScript</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
                        <span>Bootstrap</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4>Back-end</h4>
                    <div className="tech-logos">
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                        <span>PHP</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" alt="Symfony" />
                        <span>Symfony</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                        <span>MySQL</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                        <span>Node.js</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4>Outils & Design</h4>
                    <div className="tech-logos">
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                        <span>Figma</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                        <span>Git</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                        <span>GitHub</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                        <span>VS Code</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4>Mobile & Apps</h4>
                    <div className="tech-logos">
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" />
                        <span>React Native</span>
                      </div>
                      <div className="tech-logo">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" alt="Expo" />
                        <span>Expo</span>
                      </div>
                    </div>
                  </div>
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