import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 500) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();
  const goto = (props) => {
    navigate(props);
  };

  return (
    showNavbar && (
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-lg">
          <a className="navbar-brand me-5" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item list">
                <a className="nav-link ms-5 active" aria-current="page" href="#" onClick={() => goto("/")}>Home</a>
              </li>
              <li className="nav-item list">
                <a className="nav-link " href="#" onClick={() => goto("/signupOrlogin")}>Sign Up/Login</a>
              </li>
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Visit Our Org
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Gallery</a></li>
            <li className="nav-item list">
                <a className="nav-link" href="#" onClick={() => goto("/blog")}>News and Blogs</a>
              </li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Success Stories</a></li>
          </ul>
        </li>
              <li className="nav-item list">
                <a className="nav-link " href="#" onClick={() => goto("/about")}>About Us</a>
              </li>
              <li className="nav-item list">
                <a className="nav-link" href="#" onClick={() => goto("/projects")}>Projects and Impacts</a>
              </li>
              <li className="nav-item list">
                <a className="nav-link" href="#" onClick={() => goto("/blog")}>Contact Us</a>
              </li>
            </ul>
            <div className="d-flex gap-2">
            <button className="btn btn-primary p-2 list" onClick={() => goto("/donate")}><i className="bi bi-envelope-paper-heart me-2 fs-4 text-black"></i>Donate</button>
         <button className="btn btn-secondary p-2 list" onClick={() => goto("/volunteer")}> <i className="bi bi-person-raised-hand text-light"></i>Enroll as Volunteer</button>
            </div>
          </div>
        </div>
      </nav>
    )
  );
}

export default Navbar;
