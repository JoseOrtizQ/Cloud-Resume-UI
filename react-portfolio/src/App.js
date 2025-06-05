import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education'; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Education /> 
    </div>
  );
}

export default App;
