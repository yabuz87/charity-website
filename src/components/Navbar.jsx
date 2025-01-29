import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
     <div className="nav">
       <div className="container-lg navbar-container">
      <div className="left-section">logo</div>
      <div className="middle-section">
        <ul className="nav-ul">
          <li className="nav-li">Home</li>
          <li  className="nav-li">about us</li>
          <li className="nav-li">success stories</li>
          <li className="nav-li">projects and Impacts</li>
          <li className="nav-li">news and Blogs</li>
        </ul>
      </div>
      <div className="right-section">
        <button className="btn btn-primary">Donate </button>
        <button className="btn btn-secondary">Enrol as volunteer</button>
      </div>
      </div>
     </div>
    
  )
}

export default Navbar
