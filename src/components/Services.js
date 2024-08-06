import React from 'react';
import './Services.css';

const services = [
  { icon: "fa-road", title: "Roads & Highways", description: "State-of-the-art road design and construction", image: "roads.jpg" },
  { icon: "fa-shoe-prints", title: "Pavements", description: "Durable and aesthetic pavement solutions", image: "pavements.jpeg" },
  { icon: "fa-water", title: "Water Drainage", description: "Efficient water management systems", image: "water drainage.jpeg" },
  { icon: "fa-faucet", title: "Wells", description: "Sustainable groundwater extraction solutions", image: "wells.jpeg" },
  { icon: "fa-building", title: "Building Services", description: "Comprehensive building engineering services", image: "building services.jpeg" }
];

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="grid-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-inner">
                <div className="card-front card-body text-center">
                  <i className={`fas ${service.icon} fa-3x mb-3 text-primary`}></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
                <div className="card-back">
                  <img src={process.env.PUBLIC_URL + `/Images/${service.image}`} alt={service.title} className="img-fluid" />
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
