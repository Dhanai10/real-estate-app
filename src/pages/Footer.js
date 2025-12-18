import React from 'react';
import '../assets/css/Contact.css'


function Footer() {
  return (
  <footer className="bg-dark mt-5">
  <div className="container py-4">
    <div className="row">

      {/* Brand / About */}
      <div className="col-md-4 mb-3">
        <h5 className="fw-bold menu-color" style={{ color: '#f5fcf8ff' }}>
          <span style={{ color: '#0B6B3A' }}>A</span>SHOKRAJ 
          <span style={{ color: '#0B6B3A' }}> R</span>EALS
        </h5>
        <p style={{ color: '#E5E7EB' }}>
          Helping you find the perfect home with trust,<br/>
          transparency, and expertise.
        </p>
      </div>

      {/* Quick Links */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-bold" style={{ color: '#E5E7EB' }}>Quick Links</h6>
        <ul className="list-unstyled">
          <li>
            <a href="/" className="text-decoration-none" style={{ color: '#9CA3AF' }}>Home</a>
          </li>
          <li>
            <a href="/contact" className="text-decoration-none" style={{ color: '#9CA3AF' }}>Contact</a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-bold" style={{ color: '#E5E7EB' }}>Contact</h6>
        <p style={{ color: '#9CA3AF', marginBottom: '6px' }}>M. Vijaya Baskar B.A.,</p>
        <p style={{ color: '#9CA3AF', marginBottom: '6px' }}>
          <i className="bi bi-telephone-fill me-2" style={{ color: '#0B6B3A' }}></i>
          +91 80725 35369
        </p>
        <p style={{ color: '#9CA3AF', marginBottom: '6px' }}>
          <i className="bi bi-envelope-fill me-2" style={{ color: '#0B6B3A' }}></i>
          sigaramsevatrust@gmail.com
        </p>
        <p style={{ color: '#9CA3AF', marginBottom: '6px' }}>
          <i className="bi bi-geo-alt-fill me-2" style={{ color: '#0B6B3A' }}></i>
          Madurai, India
        </p>
      </div>

    </div>

    <hr className="border-secondary" />

    <div className="text-center" style={{ color: '#9CA3AF' }}>
      © {new Date().getFullYear()} ASHOKRAJ REALS. All rights reserved.
    </div>
  </div>
</footer>

  );
}

export default Footer;
