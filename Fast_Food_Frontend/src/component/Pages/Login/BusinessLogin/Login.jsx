import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import userLogin from "../../../../Assets/Login.jpeg";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <div className="page-container">
        <div className="content">
          <div className="image-section">
            <img src={userLogin} alt="Pizza" className="image" />
            <div className="image-text">
              <h2>Need some Pizza, yo?</h2>
              <p>C'mon and order from nearby Restaurants</p>
            </div>
          </div>
          <div className="form-section">
            <form className="form-container">
              <h2>Busniess Login</h2>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Busniess Username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Your Busniess Password"
                  required
                />
              </div>
              <button type="submit" className="sign-up-button">
                Login
              </button>
              <span className="business-signup-link">
                <Link to="/adminLogin">Admin Login</Link>
              </span>
              <span className="business-signup-link">
                <Link to="/Login">User Login</Link>
              </span>
              <span className="business-signup-link"></span>
            </form>
          </div>
        </div>{" "}
        {/* Add Footer component */}
      </div>
    </div>
  );
};

export default Login;
