import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero text-center">
      <div className="container">
        <h1 className="display-4 mb-4">Engineering Excellence</h1>
        <p className="lead mb-5">Comprehensive solutions for a sustainable future</p>
        <svg className="floating-gear" width="100" height="100" viewBox="0 0 100 100">
          <path fill="#ffffff" d="M50 25l5 10 10 5-10 5-5 10-5-10-10-5 10-5z" />
          <circle fill="none" stroke="#ffffff" strokeWidth="8" cx="50" cy="50" r="40" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;