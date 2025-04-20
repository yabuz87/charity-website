import React from 'react'
import "../../App.css"
import { useNavigate } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  const navigate=useNavigate();
  const goto=(props)=>{
          navigate(props);
  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg b">
  <div className="container-fluid n">
    <a className="navbar-brand" onClick={()=>{goto('/')}}>BilhGebere</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse n" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active "  aria-current="page" onClick={()=>{goto("/")}}>Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>{goto("/signup")}}>Sign up</a>
        </li>
      </ul>
      <div className="navbar-text text-decoration-none login-button" onClick={()=>{goto("/login")}}>
        Login
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
