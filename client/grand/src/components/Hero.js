import React from 'react';
import './Hero.css';

function Hero() {
    console.log("Hero rendered successfully");

    return (
        <section id="home" className="hero text-center">
            <video autoPlay loop muted className="background-video">
                <source src={`${process.env.PUBLIC_URL}/Videos/Construction%20Commercial%20Cinematic%20Video%20-%20Trim%20-%20Trim.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="container">
                <h1 className="display-4 mb-4">Engineering Excellence.</h1>
                <p className="lead mb-5">Comprehensive solutions for a sustainable future.</p>
            </div>
        </section>
    );
}

export default Hero;
