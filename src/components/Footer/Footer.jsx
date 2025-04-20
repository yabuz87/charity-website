import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer  bg-dark text-center container-fluid">
      <div className="container-fluid text-light">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-12">
            <h5>About Us</h5>
            <hr></hr>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Our Mission</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Team</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <h5>Get Involved</h5>
            <hr></hr>
            <ul className="list-unstyled">
              <li><a href="#" >Donate</a></li>
              <li><a href="#" >Volunteer</a></li>
              <li><a href="#" className="text-light text-decoration-none">Events</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            <h5>Contact Us</h5>
            <hr></hr>
            <p>Email: cca@charity.org</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Charity Lane, City, Country</p>
          </div>
        </div>
        <div className="row">
        <div><img src="/logo.png"  style={{"width":"60px","marginBottom":"30px"}}/> <span style={{verticalAlign:"top"}}>Corneluis Charity Asossation</span></div>
          <div className="col-12">
            <p className=" mb-2">&#169; 2025 by CCA Charity Association</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
