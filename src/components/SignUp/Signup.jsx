import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

const Signup = () => {
  const navigate = useNavigate();
  const { isSigningUp, signup } = useAuthStore();

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    membership: "",
  });

  const [confirmedPassword, setConfirmedPassword] = useState("");

  // Function to handle navigation
  const handleNavigate = () => {
    navigate("/signupOrlogin");
  };

  // Function to validate email and phone number
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+251\d{9}$/;

    if (!emailRegex.test(signUpData.email)) {
      alert("Please enter a valid email address!");
      return false;
    }
    if (!phoneRegex.test(signUpData.phone)) {
      alert("Please enter a valid phone number (e.g., +251...)!");
      return false;
    }
    if (signUpData.password !== confirmedPassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      await signup(signUpData);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed! Please try again.");
    }
  };

  // Check if the form is complete
  const isFormComplete = Object.values(signUpData).every(
    (field) => field.trim() !== ""
  );

  return (
    
    <div className="Signup-container container-lg">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={signUpData.fullName}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, fullName: e.target.value }))
          }
        />
        <input
          type="phone"
          placeholder="Phone +251..."
          value={signUpData.phone}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Email"
          value={signUpData.email}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          className="m-2 d-block w-75 p-2"
          placeholder="Password"
          value={signUpData.password}
          onChange={(e) =>
            setSignUpData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <input
          type="password"
          className="m-2 d-block w-75 p-2"
          placeholder="Confirm Password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <label className="text-center my-3">Membership Type:</label>
        <div className="account-type-choice">
          <div>
            <label className="account-type-label d-block">
              Permanent&nbsp;Donator
            </label>
            <input
              type="radio"
              className="fs-2 account-type-input ms-2"
              name="accountType"
              value="Permanent Donator"
              onChange={(e) =>
                setSignUpData((prev) => ({
                  ...prev,
                  membership: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label className="account-type-label d-block">One&nbsp;time</label>
            <input
              type="radio"
              className="fs-2 account-type-input ms-2"
              name="accountType"
              value="One time Donator"
              onChange={(e) =>
                setSignUpData((prev) => ({
                  ...prev,
                  membership: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <button
          className="btn btn-success d-block mx-auto mt-3"
          type="submit"
          disabled={isSigningUp || !isFormComplete}
        >
          {isSigningUp ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <h3>Do you have an account?</h3>
      <p onClick={handleNavigate}>
        Sign in here <i className="bi bi-person-check fs-4 text-info"></i>
      </p>
      <Toaster
  position="top-center"
  toastOptions={{
    style: {
      margin: "50px", // Add margin
      padding: "15px", // Add padding
      //background: "#f5f5f5", // Optional: customize background color
      //borderRadius: "8px", // Optional: add border radius
    },
  }}
/>

    </div>
  );
};

export default Signup;
