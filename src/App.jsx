import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Projects from './components/Projects';
import ContactForm from './ContactForm';
import MangastoreProject from './components/MangastoreProject';
import PortfolioPhotoProject from './components/PortfolioPhotoProject';
import SpotifyMobileProject from './components/SpotifyMobileProject';
import FluidGallery from './components/FluidGallery/FluidGallery';
import img1 from './photo/portfolio1.png';
import img2 from './photo/portfolio2.png';
import img3 from './photo/portfolio3.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/spotify-mobile" element={<SpotifyMobileProject />} />
          <Route path="/projects/mangastore" element={<MangastoreProject />} />
          <Route path="/projects/portfolio-photo" element={<PortfolioPhotoProject />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/gallery" element={<FluidGallery sources={[img1, img2, img3]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
