// Replace your current App.js with this:
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications'; 
import About from './components/About';
import Contact from './components/Contact';
import ProjectsPageComponent from './components/ProjectsPage';

// Wrapper component to access location
const AppContent = () => {
  const location = useLocation();

  // Create a Home component that contains all your current sections
  const Home = () => {
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

  return (
    <PageTransition location={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </PageTransition>
  );
};

function App() {
  return (
    <Router>
      <div>
        <AppContent />
      </div>
    </Router>
  );
}

export default App;