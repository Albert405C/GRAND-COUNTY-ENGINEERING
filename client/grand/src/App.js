import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <Hero />
     
      </div>

    </div>
  );
}

export default App;
