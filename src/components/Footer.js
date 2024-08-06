import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>Grand County Engineering Solutions Ltd provides top-notch engineering services to meet all your needs. Our experienced team ensures quality and efficiency in every project.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#projects" className="text-white">Projects</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
              <li><a href="#privacy-policy" className="text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p><FaMapMarkerAlt className="me-2" /> Kiigene-Nkubu, MERU, KENYA 124 60202</p>
            <p><FaEnvelope className="me-2" /> info@grandcountyengineering.com</p>
            <p><FaPhone className="me-2" /> +1 (123) 456-7890</p>
            <div className="social-media mt-3">
              <a href="https://facebook.com" className="text-white me-2"><FaFacebook /></a>
              <a href="https://instagram.com" className="text-white me-2"><FaInstagram /></a>
              <a href="https://twitter.com" className="text-white me-2"><FaTwitter /></a>
              <a href="https://linkedin.com" className="text-white"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 Grand County Engineering Solutions Ltd. All rights reserved.</p>
          <a href="#top" className="btn btn-light mt-2">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
