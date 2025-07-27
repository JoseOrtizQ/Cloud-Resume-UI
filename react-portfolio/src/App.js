// App.js without PageTransition
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications'; 
import About from './components/About';
import Contact from './components/Contact';
import ProjectsPageComponent from './components/ProjectsPage';

// Create a Home component that contains all your current sections
const Home = () => {
  // Handle hash navigation when component mounts
  useEffect(() => {
    // Check if there's a hash in the URL when the page loads
    if (window.location.hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const navbarHeight = 60;
          const elementPosition = element.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Certifications /> 
      <About />
      <Contact />
    </>
  );
};

// Create a Projects page layout that includes Navbar
const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <ProjectsPageComponent />
    </>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;