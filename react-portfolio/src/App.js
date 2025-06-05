import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'; // ✅ Add this line

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects /> 
    </div>
  );
}

export default App;
