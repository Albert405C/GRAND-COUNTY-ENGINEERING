import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProjects([
        { id: 1, title: 'Bridge Construction', description: 'State-of-the-art bridge design and construction', image: 'https://source.unsplash.com/600x400/?bridge' },
        { id: 2, title: 'Smart City Planning', description: 'Innovative urban planning solutions', image: 'https://source.unsplash.com/600x400/?city' },
        { id: 3, title: 'Green Energy Infrastructure', description: 'Sustainable energy solutions for the future', image: 'https://source.unsplash.com/600x400/?energy' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Projects</h2>
        {loading ? (
          <p className="text-center">Loading projects...</p>
        ) : (
          <div className="row">
            {projects.map(project => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card project-card h-100">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
