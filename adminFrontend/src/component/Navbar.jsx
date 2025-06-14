import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { authUser, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goto = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu when navigating
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => goto("/")}>
          <span className="logo-icon">👨‍💼</span>
          <span>Admin Panel</span>
        </div>

        {/* Hamburger Menu Button */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {/* Home Link */}
            <li className="nav-item">
              <button className="nav-link" onClick={() => goto("/")}>
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </button>
            </li>

            {/* Add Admin Link */}
            <li className="nav-item">
              <button className="nav-link" onClick={() => goto("/signup")}>
                <i className="bi bi-person-plus"></i>
                <span>Add Admin</span>
              </button>
            </li>

            {/* Upload Dropdown */}
            <li className="nav-item dropdown">
              <button 
                className="dropdown-toggle"
                aria-haspopup="true" 
                aria-expanded="false"
                onClick={(e) => {
                  const dropdown = e.currentTarget.nextElementSibling;
                  dropdown.classList.toggle('show');
                  document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdown) menu.classList.remove('show');
                  });
                }}
                onBlur={(e) => {
                  setTimeout(() => {
                    if (!e.currentTarget.contains(document.activeElement)) {
                      e.currentTarget.nextElementSibling.classList.remove('show');
                    }
                  }, 100);
                }}
              >
                <i className="bi bi-cloud-upload"></i>
                <span>Upload</span>
                <i className="bi bi-chevron-down dropdown-arrow"></i>
              </button>
              <ul 
                className="dropdown-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => {
                      goto("/uploadblog");
                      document.querySelector('.dropdown-menu').classList.remove('show');
                    }}
                  >
                    <i className="bi bi-file-earmark-text"></i>
                    <span>Upload Blog</span>
                    <span className="dropdown-hint">Create new articles</span>
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => {
                      goto("/uploadgallery");
                      document.querySelector('.dropdown-menu').classList.remove('show');
                    }}
                  >
                    <i className="bi bi-images"></i>
                    <span>Upload Gallery</span>
                    <span className="dropdown-hint">Add images/media</span>
                  </button>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <button 
                    className="dropdown-item" 
                    onClick={() => {
                      goto("/uploadproject");
                      document.querySelector('.dropdown-menu').classList.remove('show');
                    }}
                  >
                    <i className="bi bi-lightbulb"></i>
                    <span>Upload Projects</span>
                    <span className="dropdown-hint">Showcase your work</span>
                  </button>
                </li>
              </ul>
            </li>

            {/* Profile and Logout (Conditional Rendering) */}
            {authUser && (
              <li className="profile-section">
                <button className="profile-btn" onClick={() => goto("/profile")}>
                  <i className="bi bi-person-circle"></i>
                  <span className="profile-name" >Profile</span>
                </button>
                <button className="logout-btn" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Logout</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;