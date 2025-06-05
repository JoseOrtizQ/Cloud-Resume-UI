import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications'; 
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Certifications /> 
      <About />
      <Contact />
    </div>
  );
}

export default App;
