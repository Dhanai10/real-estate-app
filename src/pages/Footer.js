import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Brand / About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">DreamHome Reality</h5>
            <p className="text-secondary">
              Helping you find the perfect home with trust,
              transparency, and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="text-secondary mb-1">📍 Madurai, India</p>
            <p className="text-secondary mb-1">📞 +91 9XXXXXXXXX</p>
            <p className="text-secondary mb-1">✉️ info@dreamhome.com</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-secondary">
          © {new Date().getFullYear()} DreamHome Reality. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
