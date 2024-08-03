import React from 'react';
import './Services.css';

const services = [
  { icon: "fa-road", title: "Roads & Highways", description: "State-of-the-art road design and construction" },
  { icon: "fa-shoe-prints", title: "Pavements", description: "Durable and aesthetic pavement solutions" },
  { icon: "fa-water", title: "Water Drainage", description: "Efficient water management systems" },
  { icon: "fa-faucet", title: "Wells", description: "Sustainable groundwater extraction solutions" },
  { icon: "fa-building", title: "Building Services", description: "Comprehensive building engineering services" }
];

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card service-card h-100">
                <div className="card-body text-center">
                  <i className={`fas ${service.icon} fa-3x mb-3 text-primary`}></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
