import React from 'react';
import './About.css';
import sidyNoir from './photo/sidyNoir.jpeg';

const About = () => {
  const frontendSkills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML5' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS3' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', name: 'Tailwind' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg', name: 'Bootstrap' }
  ];

  const backendSkills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', name: 'PHP' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', name: 'Symfony' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' }
  ];

  const mobileSkills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React Native' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', name: 'Expo' }
  ];

  const toolsSkills = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VS Code' }
  ];

  const softSkills = [
    { icon: '🎯', name: 'Autonome et rigoureux' },
    { icon: '🤝', name: 'Esprit d\'équipe' },
    { icon: '💡', name: 'Créatif et curieux' },
    { icon: '⚡', name: 'Adaptabilité rapide' },
    { icon: '🎨', name: 'Sens du détail' },
    { icon: '📈', name: 'Apprentissage continu' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Bonjour, je suis</span>
              <span className="title-name">Sidy Djimbira</span>
              <span className="title-role">Développeur Web</span>
            </h1>
            <p className="hero-description">
              Passionné par le développement web, je crée des expériences digitales 
              modernes et performantes. Basé à Noisy-le-Grand, je suis à la recherche 
              de ma première opportunité professionnelle.
            </p>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={sidyNoir} alt="Sidy Djimbira" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">À propos de moi</h2>
            <p className="section-subtitle">
              Découvrez mon parcours, mes compétences et ma vision
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card story-card">
              <div className="card-icon">📖</div>
              <h3>Mon Histoire</h3>
              <p>
                Après une formation rigoureuse en développement web, j'ai acquis une solide maîtrise 
                des technologies modernes. Mon objectif est de créer des solutions web innovantes 
                qui allient performance et esthétique.
              </p>
            </div>

            <div className="about-card mission-card">
              <div className="card-icon">🎯</div>
              <h3>Ma Mission</h3>
              <p>
                Je cherche à intégrer une équipe dynamique qui me permettra de continuer à progresser 
                tout en apportant mes compétences techniques et ma motivation. Curieux et autonome, 
                je suis prêt à relever tous les défis.
              </p>
            </div>

            <div className="about-card values-card">
              <div className="card-icon">💎</div>
              <h3>Mes Valeurs</h3>
              <p>
                Qualité, rigueur et innovation sont au cœur de mon approche. Je privilégie 
                le code propre, les performances optimisées et une expérience utilisateur 
                exceptionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mes Compétences</h2>
            <p className="section-subtitle">
              Technologies et outils que je maîtrise
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">🎨</span>
                Frontend
              </h3>
              <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">⚙️</span>
                Backend
              </h3>
              <div className="skills-list">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">📱</span>
                Mobile
              </h3>
              <div className="skills-list">
                {mobileSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">🛠️</span>
                Outils
              </h3>
              <div className="skills-list">
                {toolsSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="soft-skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Compétences Transversales</h2>
            <p className="section-subtitle">
              Qualités qui font la différence
            </p>
          </div>

          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <div className="soft-skill-icon">{skill.icon}</div>
                <span className="soft-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à collaborer ?</h2>
            <p className="cta-description">
              Je suis ouvert aux opportunités et aux défis passionnants. 
              N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Me Contacter</a>
              <a href="/projects" className="btn btn-secondary">Voir mes Projets</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 