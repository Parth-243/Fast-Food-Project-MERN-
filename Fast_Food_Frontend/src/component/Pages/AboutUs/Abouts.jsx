import React from "react";
import "./Abouts.css";

function Abouts() {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-content">
          <h1 className="about-title">
            We Champion Restaurants from Coast to Coast
          </h1>
          <p className="about-description">
            Restaurants sit at the heart of communities. It’s our mission to
            strengthen their roots, deepen their connections, and increase the
            positive impact they have on people and society.
          </p>
          <button className="impact-button">View Our Impact</button>
        </div>
        <div className="about-image">
          <img src="bus.jpg" alt="Big Image" />
        </div>
      </section>

      <section className="location-section">
        <h2 className="section-title">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590444!3d-37.81627974202126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e92e005bb3a3!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1619631442771!5m2!1sen!2sau"
          loading="lazy"
          allowFullScreen=""
          title="Company Location"
        ></iframe>
      </section>

      <section className="team-section">
        <h1 className="section-title">Team Overview</h1>
        <div className="image-grid">
          <img src="member.jpg" alt="Team Member 1" />
          <img src="member1.jpg" alt="Team Member 2" />
          <img src="member2.jpg" alt="Team Member 3" />
          <img src="member3.jpg" alt="Team Member 4" />
        </div>
      </section>
    </div>
  );
}

export default Abouts;
