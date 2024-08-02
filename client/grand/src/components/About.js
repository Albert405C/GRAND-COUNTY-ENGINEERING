import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Grand County Engineering</h2>
        <p className="lead text-center">We are a team of dedicated professionals committed to delivering cutting-edge engineering solutions that shape the world around us. With a focus on innovation, sustainability, and excellence, we tackle complex challenges to create a brighter future for our communities.</p>
        
        <div className="stats-container mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-project-diagram"></i>
              <h4>100+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-users"></i>
              <h4>50+</h4>
              <p>Expert Engineers</p>
            </div>
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-award"></i>
              <h4>25+</h4>
              <p>Industry Awards</p>
            </div>
            <div className="col-md-3 col-sm-6 stat-item">
              <i className="fas fa-globe"></i>
              <h4>10+</h4>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
        
        {/* Additional Sections */}
        <div className="additional-sections mt-5">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>To be the leading engineering firm known for innovation and excellence in every project.</p>
          </div>
          <div className="mission mt-4">
            <h3>Our Mission</h3>
            <p>To deliver top-quality engineering solutions that exceed our clients' expectations and contribute to sustainable development.</p>
          </div>
          <div className="core-values mt-4">
            <h3>Core Values</h3>
            <ul>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </div>
          <div className="success mt-4">
            <h3>Our Success</h3>
            <p>Over the years, we have successfully completed numerous high-profile projects and earned recognition for our commitment to quality and innovation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
