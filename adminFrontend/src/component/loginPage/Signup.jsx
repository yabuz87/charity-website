import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";

const Signup = () => {
  const navigate = useNavigate();
  const { isSigningUp, signup } = useAuthStore();

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [confirmedPassword, setConfirmedPassword] = useState("");

  // Function to handle navigation
  const handleNavigate = () => {
    navigate("/signupOrlogin");
  };

  // Function to validate inputs
  const validateInputs = () => {
    if (Object.values(signUpData).some((field) => field.trim() === "")) {
      alert("Please fill out all the fields!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpData.email)) {
      alert("Please enter a valid email address!");
      return false;
    }

    if (signUpData.password.length < 6) {
      alert("Password must be at least 6 characters!");
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
      console.log("entered into try block")
      alert("Signup successful!");
    } catch (error) {
      console.error(error.message);
      alert(
        error.response?.data?.message ||
        "Signup failed! Please try again later."
      );
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
            margin: "50px",
            padding: "15px",
          },
        }}
      />
    </div>
  );
};

export default Signup;