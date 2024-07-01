import React from "react";
import "./Footer.css";
import Logo from "../../../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-link-column">
            <h3>Company</h3>
            <ul>
              <li>Quality</li>
              <li>Help</li>
              <li>Share</li>
              <li>Careers</li>
              <li>Testimonials</li>
              <li>Work</li>
            </ul>
          </div>
          <div className="footer-link-column">
            <h3>Contact</h3>
            <ul>
              <li>244-5333-7783</li>
              <li>hello@food.com</li>
              <li>press@food.com</li>
              <li>contact@food.com</li>
            </ul>
          </div>
          <div className="footer-link-column">
            <h3>Legal</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
