import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-ligth text-dark text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Our Mission</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Our Team</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <h5>Get Involved</h5>
            <ul className="list-unstyled">
              <li><a href="#" >Donate</a></li>
              <li><a href="#" >Volunteer</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Events</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 col-12 mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@charity.org</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Charity Lane, City, Country</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="mt-3 mb-0">&#169; 2025 by ABC Charity Association</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
