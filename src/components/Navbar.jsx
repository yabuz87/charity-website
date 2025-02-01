import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 500) { // Change 100 to the desired scroll height
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
  }
 

  return (
    showNavbar && (
      <div className="nav">
        <div className="container-lg navbar-container">
          <div className="left-section">logo</div>
          <div className="middle-section">
            <ul className="nav-ul">
              <li className="list" onClick={()=>{goto("/")}}>Home</li>
              <li className="list">Sign up</li>
              <li className="list">About us</li>
              <li className="list">projects and Impacts</li>
              <li className="list" onClick={()=>{goto("/blog")}}>news and Blogs</li>
            </ul>
          </div>
          <div className="right-section">
            <button className="btn btn-primary">Donate</button>
            <button className="btn btn-secondary">Enrol as volunteer</button>
          </div>
        </div>
      </div>
    )
  )
}

export default Navbar;
