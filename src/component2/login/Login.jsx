import React from 'react';

import img1 from "../../assets/corn.svg"
import img2 from "../../assets/leaf.svg";
import './Login.css';

const Login = () => {
   
  return (
    <>
        <div>
        <img className="img-svg1" src={img1}></img>
        <img className="img-svg2" src={img2}></img>
        <img className="img-svg3" src={img2}></img>

    </div>
    <div className="container-lg">
      <form className="form-container container-lg">
      <h2 className="text-center" >Login</h2>
        <div className="email-input-container">
          <label>Email</label>
          <div className="input-div1">
            <input type="text" className="input-container" placeholder="Write your Email" />
          </div>
        </div>
        <div className="password-input-container">
          <label>Password</label>
          <div className="input-div">
            <input type="text" className="input-container" placeholder="Write your Password" />
          </div>
        </div>
        <button className=" px-5 login-button">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;
