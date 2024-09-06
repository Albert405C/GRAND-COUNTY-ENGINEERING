import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import OrgChart from './components/OrgChart';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Contact />
        <Footer />
  

       
      
    
      </div>

    </div>
  );
}

export default App;
