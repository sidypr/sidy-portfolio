import React from 'react';
import './About.css';
import sidyNoir from './photo/sidyNoir.jpeg';
import LogoLoop from './components/LogoLoop';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiBootstrap, 
  SiPhp, 
  SiSymfony, 
  SiMysql, 
  SiNodedotjs, 
  SiFigma, 
  SiGit, 
  SiGithub, 
  SiExpo 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const About = () => {
  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiReact />, title: "React" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiPhp />, title: "PHP" },
    { node: <SiSymfony />, title: "Symfony" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiFigma />, title: "Figma" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <VscCode />, title: "VS Code" },
    { node: <SiExpo />, title: "Expo" }
  ];

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
                <div className="skills-container">
                  <LogoLoop
                    logos={techLogos}
                    speed={80}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#000000"
                    ariaLabel="Technologies et compétences"
                  />
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