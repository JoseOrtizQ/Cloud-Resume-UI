import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications'; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Certifications /> 
    </div>
  );
}

export default App;
