// src/BusinessPanel.js
import React, { useState } from "react";
import "./BusinessPanel.css";

function BusinessPanel() {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    price: "",
    category: "Pizza", // Default category
    image: null,
    spicy: false,
    vegetarian: false,
    vegan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="business-panel">
      <header className="header">
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <span className="sidebar-heading">Menu Card</span>
              <ul>
                <li>
                  <a href="#your-food-menu">Your Food Menu</a>
                </li>
                <li>
                  <a href="#menu-table">Menu Table</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="sidebar-heading">Payment History</span>
            </li>
            <li>
              <span className="sidebar-heading">Feedback</span>
              <ul>
                <li>
                  <a href="#customer-feedback">Customer Feedback</a>
                </li>
                <li>
                  <a href="#notes">Notes</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="sidebar-heading">About Us</span>
            </li>
            <li>
              <span className="sidebar-heading">Contact Us</span>
            </li>
            <li>
              <span className="sidebar-heading">Your Profile</span>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <h1>Welcome to the Business Panel</h1>
          <form className="food-form" onSubmit={handleSubmit}>
            <label>
              Food Item Name:
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Price ($):
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Category:
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Noodles">Noodles</option>
                <option value="Manchurian">Manchurian</option>
                <option value="Shakes">Shakes</option>
                <option value="Desserts">Desserts</option>
              </select>
            </label>
            <label>
              Upload Image:
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </label>
            <div className="checkbox-group">
              <label>
                Spicy:
                <input
                  type="checkbox"
                  name="spicy"
                  checked={formData.spicy}
                  onChange={handleChange}
                />
              </label>
              <label>
                Vegetarian:
                <input
                  type="checkbox"
                  name="vegetarian"
                  checked={formData.vegetarian}
                  onChange={handleChange}
                />
              </label>
              <label>
                Vegan:
                <input
                  type="checkbox"
                  name="vegan"
                  checked={formData.vegan}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Business Panel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BusinessPanel;
