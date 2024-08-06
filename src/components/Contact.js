import React from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 mb-4 contact-info">
            <h4 className="mb-3">Address</h4>
            <p><FaMapMarkerAlt className="contact-icon" /> Kiigene-Nkubu<br />Meru, Kenya 124 60202</p>
            <h4 className="mb-3">Email</h4>
            <p><FaEnvelope className="contact-icon" /> info@grandcountyengineering.com</p>
            <h4 className="mb-3">Phone</h4>
            <p><FaPhone className="contact-icon" /> +1 (123) 456-7890</p>
            <div className="social-media mt-4">
              <a href="https://facebook.com" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
