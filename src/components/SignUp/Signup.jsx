import React from 'react';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login"); // Navigate to the home page or desired route
  }

  return (
    <div className="Signup-container container-lg">
      <h2 className="text-center">SignUp</h2>
      <form>
        <label>Last Name:</label>
        <input type="text" placeholder='Last Name here'></input>
        <label>Phone:</label>
        <input type="phone" placeholder='+251'></input>
        <label>Email:</label>
        <input type="text" placeholder='Email here'></input>
        <label>Country:</label>
        <input type="text" placeholder='Country here'></input>
        <label>Email:</label>
        <input type="text" placeholder='Email here'></input>
        <label className="text-center my-3">Account Type:</label>
        <div className="account-type-choice">
          <label className="account-type-label">Donator</label>
          <input type="radio" className="fs-2 account-type-input ms-2" name="accountType"></input>
          
          <label className="account-type-label">Member</label>
          <input type="radio" className="fs-2 account-type-input ms-2" name="accountType"></input>
        </div>
      </form>
      <h3>Do you have an Account?</h3>
      <p onClick={handleNavigate}>Sign in here <i className="bi bi-person-check fs-4 text-info"></i></p>
    </div>
  )
}

export default Signup;
