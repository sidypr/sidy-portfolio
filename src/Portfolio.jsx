import React from 'react';
import Aurora from './Aurora'; // Assurez-vous que le chemin est correct

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                speed={0.5}
            />
            <header>
                <h1>Mon Portfolio</h1>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Projets</li>
                        <li>À propos</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <section id="projects">
                <h2>Mes Projets</h2>
            </section>
            <footer>
                <p>© 2023 Mon Nom</p>
            </footer>
        </div>
    );
};

export default Portfolio; 