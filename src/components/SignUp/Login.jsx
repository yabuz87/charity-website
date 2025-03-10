import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const gotoSignup = () => {
    navigate("/signup");
  }

  return (
    <div className="Signup-container container-lg mb-3">
      <h2 className="text-center">Login</h2>
      <form>
        <input type="text" placeholder='Email here'></input>
        <input type="text" placeholder='password'></input>
      </form>
      <div className="hr-container">
        <hr />
        <p className="or-text">or</p>
        <hr />
      </div>
      <p> <i className="bi bi-google text-center fs-2"></i></p>
      <hr />
      <h5 className="" onClick={gotoSignup}>Don't you have an account? <span className="text-success">Signup</span></h5>
    </div>
  )
}

export default Login;
