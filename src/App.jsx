import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Projects from './components/Projects';
import ContactForm from './ContactForm';
import MangastoreProject from './components/MangastoreProject';
import PortfolioPhotoProject from './components/PortfolioPhotoProject';
import SpotifyMobileProject from './components/SpotifyMobileProject';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
