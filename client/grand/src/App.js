import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import OrgChart from './components/OrgChart';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Performance from './components/Performance';
import Newsletter from './components/Newsletter';
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
        <Certifications />
        <Testimonials />
        <Performance />
        <Newsletter />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
