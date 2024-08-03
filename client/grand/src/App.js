import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import OrgChart from './components/OrgChart';



import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <Hero />
        <About />
        <Services />
        <Projects />
        <OrgChart />
      
    
      </div>

    </div>
  );
}

export default App;
