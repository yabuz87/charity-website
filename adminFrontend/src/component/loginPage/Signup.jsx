import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";

const Signup = () => {
  const navigate = useNavigate();
  const { isSigningUp, signup } = useAuthStore();

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user" // Added role field for admin/user distinction
  });

  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleNavigate = () => {
    navigate("/signupOrlogin");
  };

  const toggleAdminLogin = () => {
    setShowAdminLogin(!showAdminLogin);
    setSignUpData(prev => ({ ...prev, role: showAdminLogin ? "user" : "admin" }));
  };

  const validateInputs = () => {
    if (Object.values(signUpData).some((field) => field.trim() === "")) {
      toast.error("Please fill out all the fields!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpData.email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }

    if (signUpData.password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return false;
    }

    if (signUpData.password !== confirmedPassword) {
      toast.error("Passwords do not match!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      await signup(signUpData);
      toast.success("Signup successful!");
      if (signUpData.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(
        error.response?.data?.message ||
        "Signup failed! Please try again later."
      );
    }
  };

  const isFormComplete = Object.values(signUpData).every(
    (field) => field.trim() !== ""
  );

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-header">
          <h2>Create Account</h2>
          <p>Join our community today</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={signUpData.fullName}
              onChange={(e) =>
                setSignUpData((prev) => ({ ...prev, fullName: e.target.value }))
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={signUpData.email}
              onChange={(e) =>
                setSignUpData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={signUpData.password}
              onChange={(e) =>
                setSignUpData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </div>

          <div className="admin-toggle">
            <input
              type="checkbox"
              id="adminToggle"
              checked={showAdminLogin}
              onChange={toggleAdminLogin}
            />
            <label htmlFor="adminToggle">Register as admin</label>
          </div>

          {showAdminLogin && (
            <div className="admin-code-group">
              <label htmlFor="adminCode">Admin Code</label>
              <input
                id="adminCode"
                type="password"
                placeholder="Enter admin access code"
              />
            </div>
          )}

          <button
            className="signup-button"
            type="submit"
            disabled={isSigningUp || !isFormComplete}
          >
            {isSigningUp ? (
              <span className="spinner"></span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{" "}
            <span onClick={handleNavigate} className="login-link">
              Sign in
            </span>
          </p>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Signup;