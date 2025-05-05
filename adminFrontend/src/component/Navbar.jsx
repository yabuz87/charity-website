import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { authUser, logout } = useAuthStore();

  const goto = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
            {/* Home Link */}
            <li className="nav-item">
              <a className="nav-link active" role="button" onClick={() => goto("/")}>
                Home
              </a>
            </li>

            {/* Add Admin Link */}
            <li className="nav-item">
              <a className="nav-link active" role="button" onClick={() => goto("/signup")}>
                Add Admin
              </a>
            </li>

            {/* Upload Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Upload
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" role="button" onClick={() => goto("/uploadblog")}>
                    Upload Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" role="button" onClick={() => goto("/uploadgallery")}>
                    Upload Gallery
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" role="button" onClick={() => goto("/uploadproject")}>
                    Upload Projects and Impact
                  </a>
                </li>
              </ul>
            </li>

            {/* Profile Icon (Conditional Rendering) */}
            {authUser && (
              <li className="nav-item">
                <i
                  className="bi bi-person-circle fs-4"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Profile"
                ></i>
              </li>
            )}

            {/* Logout Icon (Conditional Rendering & Function Call) */}
            {authUser && (
              <li className="nav-item">
                <i
                  className="bi bi-box-arrow-right fs-4"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Logout"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                ></i>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;