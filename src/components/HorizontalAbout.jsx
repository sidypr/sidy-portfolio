import React, { useState, useEffect } from 'react';
import './HorizontalAbout.css';
import sidyNoir from '../photo/sidyNoir.jpeg';

const HorizontalAbout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Présentation",
      content: (
        <div className="slide-content">
          <div className="presentation-grid">
            <div className="text-content">
              <h2>Bonjour, je m'appelle Sidy Djimbira</h2>
              <p>Développeur web basé à Noisy-le-Grand, je suis passionné par le développement web et actuellement à la recherche de ma première opportunité professionnelle en tant que développeur web ou intégrateur web.</p>
              <p>Après une formation rigoureuse, j'ai acquis une solide maîtrise des langages du web et des outils modernes pour concevoir, coder et déployer des sites performants et accessibles.</p>
            </div>
            <div className="image-content">
              <img src={sidyNoir} alt="Sidy Djimbira" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Compétences Techniques",
      content: (
        <div className="slide-content">
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <div className="skill-item">HTML5</div>
                <div className="skill-item">CSS3</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">React</div>
                <div className="skill-item">Tailwind</div>
                <div className="skill-item">TypeScript</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <div className="skill-item">PHP</div>
                <div className="skill-item">Symfony</div>
                <div className="skill-item">MySQL</div>
                <div className="skill-item">Node.js</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Mobile</h3>
              <div className="skill-items">
                <div className="skill-item">React Native</div>
                <div className="skill-item">Expo</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Outils</h3>
              <div className="skill-items">
                <div className="skill-item">Git</div>
                <div className="skill-item">GitHub</div>
                <div className="skill-item">VS Code</div>
                <div className="skill-item">Figma</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Autres Compétences",
      content: (
        <div className="slide-content">
          <div className="other-skills">
            <div className="skill-card">
              <div className="skill-icon">🌐</div>
              <h3>Création de sites web</h3>
              <p>Développement complet de A à Z</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🚀</div>
              <h3>Mise en ligne</h3>
              <p>Hébergement et déploiement de projets</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Optimisation pour tous les appareils</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">♿</div>
              <h3>Accessibilité</h3>
              <p>Standards WCAG et bonnes pratiques</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h3>Intégration</h3>
              <p>Transformation de maquettes en code</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚡</div>
              <h3>Performance</h3>
              <p>Optimisation et méthodologie agile</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Objectif Professionnel",
      content: (
        <div className="slide-content">
          <div className="objective-content">
            <h2>Mon ambition</h2>
            <p>Je cherche à intégrer une équipe dynamique qui me permettra de continuer à progresser tout en apportant mes compétences techniques, ma rigueur et ma motivation.</p>
            <p>Curieux, autonome et à l'écoute, je suis prêt à relever tous les défis techniques et créatifs !</p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email :</strong> sidy.djimbira@gmail.com
              </div>
              <div className="contact-item">
                <strong>Localisation :</strong> Noisy-le-Grand, France
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleWheel = (e) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (e.deltaX > 0 || e.deltaY > 0) {
      // Scroll vers la droite
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    } else {
      // Scroll vers la gauche
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, handleKeyDown]);

  return (
    <div className="horizontal-about" onWheel={handleWheel}>
      <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="slide-header">
              <h1>{slide.title}</h1>
            </div>
            {slide.content}
          </div>
        ))}
      </div>
      
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HorizontalAbout;
