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
      </div>
    </section>
  );
}

export default About;
