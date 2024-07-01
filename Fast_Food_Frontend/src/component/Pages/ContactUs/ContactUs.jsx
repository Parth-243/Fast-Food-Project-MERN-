import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          We'd love to hear from you! Fill out the form below and our team will
          get back to you as soon as possible.
        </p>
      </section>

      <section className="contact-form-section">
        <div className="form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="contact-info-section">
        <h2 className="info-title">Contact Information</h2>
        <div className="info-container">
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Foodie Lane, Flavor Town, TX 12345</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
            </p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
