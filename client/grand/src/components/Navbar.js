import React from 'react';


const Navbar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
            <div className='Container'>
                <a className='navbar-brand' href='#Home'>"GRAND COUNTY ENGINEERING"</a>
                <button className='navbar-toggler' type='button' data-bs-toggle = "collapse" data-bs-target = "navbarnav"> <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id = "navbarnav">
                   <ul className='navbar-nav ms-auto'>
                     <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                     <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                     <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                     <li className="nav-item"><a className="nav-link" href="#org-chart">Organization</a></li>
                     <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>
                     <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            
                   </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
