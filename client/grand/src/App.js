import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';




import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <Hero />
        <About />
      
    
      </div>

    </div>
  );
}

export default App;
