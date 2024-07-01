import React from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import userLogin from "../../../../Assets/login1.jpg";
const AdminLogin = () => {
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
            <div className="image-text"></div>
          </div>
          <div className="form-section">
            <form className="form-container">
              <h2>Admin Login</h2>
              <div className="form-group">
                <label htmlFor="name">Admin Username</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <button type="submit" className="sign-up-button">
                Login
              </button>

              <span className="business-signup-link">
                <Link to="/Login">User Login</Link>
              </span>
              <span className="business-signup-link">
                <Link to="/businessLogin">Business Login</Link>
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

export default AdminLogin;
