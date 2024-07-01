import React from "react";
import "./BusniessSignup.css";
import { Link } from "react-router-dom";

function BusniessSignup() {
  return (
    <div>
      <div className="page-container">
        <div className="content">
          <div className="image-section">
            <img src="sign.jpg" alt="Pizza" className="image" />
            <div className="image-text">
              <h2>Need some Pizza, yo?</h2>
              <p>
                C'mon and order from nearby Pizza delivery and pickup
                restaurants
              </p>
            </div>
          </div>
          <div className="form-section">
            <form className="form-container">
              <h2>Busniess Sign Up</h2>
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
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Busniess E-mail"
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
                Sign Up
              </button>
              <span className="business-signup-link">
                <Link to="/signup">User Sign Up</Link>
              </span>
            </form>
          </div>
        </div>{" "}
        {/* Add Footer component */}
      </div>
    </div>
  );
}

export default BusniessSignup;
