import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications'; 
import About from './components/About';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Certifications /> 
      <About />
    </div>
  );
}

export default App;
