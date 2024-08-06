import React, { useState, useEffect } from 'react';
import { Projectsdata } from './Projectsdata';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('Road Works');

  useEffect(() => {
    setProjects(Projectsdata);
    setLoading(false);
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Projects</h2>
        <div className="text-center mb-4">
          {Projectsdata.map((categoryData) => (
            <button
              key={categoryData.category}
              className={`btn btn-outline-primary mx-2 ${category === categoryData.category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(categoryData.category)}
            >
              {categoryData.category}
            </button>
          ))}
        </div>
        {loading ? (
          <p className="text-center">Loading projects...</p>
        ) : (
          <div className="row">
            {projects
              .find((cat) => cat.category === category)
              .projects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card project-card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">
                        <strong>Client:</strong> {project.client}
                      </p>
                      <p className="card-text">
                        <strong>Total Value:</strong> {project.value}
                      </p>
                      <p className="card-text">
                        <strong>Role:</strong> {project.role}
                      </p>
                      <p className="card-text">
                        <strong>Year:</strong> {project.year}
                      </p>
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
