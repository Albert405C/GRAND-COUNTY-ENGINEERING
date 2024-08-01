import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import VisionMission from './components/VisionMission';
import OrgChart from './components/OrgChart';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Performance from './components/Performance';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import axios from 'axios';
import Chart from 'chart.js/auto';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const chartRef = useRef(null);
  const testimonials = [
    { name: "John Doe", company: "Tech Innovators", text: "Grand County Engineering has transformed our city's infrastructure. Their innovative solutions are second to none!" },
    { name: "Jane Smith", company: "Green Energy Co.", text: "Working with Grand County on our sustainable energy project was a game-changer. Highly recommended!" },
    { name: "Mike Johnson", company: "Urban Planning Associates", text: "The team at Grand County brings unparalleled expertise to every project. They're our go-to engineering firm." }
  ];

  const services = [
    { icon: "fa-road", title: "Roads & Highways", description: "State-of-the-art road design and construction" },
    { icon: "fa-shoe-prints", title: "Pavements", description: "Durable and aesthetic pavement solutions" },
    { icon: "fa-water", title: "Water Drainage", description: "Efficient water management systems" },
    { icon: "fa-faucet", title: "Wells", description: "Sustainable groundwater extraction solutions" },
    { icon: "fa-building", title: "Building Services", description: "Comprehensive building engineering services" }
  ];

  useEffect(() => {
    // Simulate API call to fetch projects
    setTimeout(() => {
      setProjects([
        { id: 1, title: 'Bridge Construction', description: 'State-of-the-art bridge design and construction', image: 'https://source.unsplash.com/600x400/?bridge' },
        { id: 2, title: 'Smart City Planning', description: 'Innovative urban planning solutions', image: 'https://source.unsplash.com/600x400/?city' },
        { id: 3, title: 'Green Energy Infrastructure', description: 'Sustainable energy solutions for the future', image: 'https://source.unsplash.com/600x400/?energy' }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Projects Completed',
          data: [12, 19, 23, 29, 35],
          backgroundColor: 'rgba(52, 152, 219, 0.6)',
          borderColor: 'rgba(52, 152, 219, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services services={services} />
      <Projects projects={projects} loading={loading} />
      <VisionMission />
      <OrgChart />
      <Certifications />
      <Testimonials testimonials={testimonials} activeTestimonial={activeTestimonial} nextTestimonial={nextTestimonial} prevTestimonial={prevTestimonial} />
      <Performance chartRef={chartRef} />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
  
}

export default App;

