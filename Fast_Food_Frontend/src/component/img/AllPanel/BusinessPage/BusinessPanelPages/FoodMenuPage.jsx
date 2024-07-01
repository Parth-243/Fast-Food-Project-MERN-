// src/components/FoodMenuPage.js
import React, { useState, useEffect } from "react";
import "./FoodMenuPage.css"; // Import CSS for styling

function FoodMenuPage() {
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a database
    // Replace with actual API call or data fetching logic
    const fetchData = async () => {
      // Example data structure: array of food categories
      const data = [
        {
          id: 1,
          category: "Pizza",
          foods: [
            {
              id: 101,
              name: "Margherita Pizza",
              price: 12.99,
              image: "",
            },
            {
              id: 102,
              name: "Pepperoni Pizza",
              price: 14.99,
              image: "",
            },
            {
              id: 103,
              name: "Vegetarian Pizza",
              price: 13.99,
              image: "",
            },
          ],
        },
        {
          id: 2,
          category: "Burger",
          foods: [
            {
              id: 201,
              name: "Cheeseburger",
              price: 8.99,
              image: "",
            },
            {
              id: 202,
              name: "Chicken Burger",
              price: 9.99,
              image: "",
            },
            {
              id: 203,
              name: "Veggie Burger",
              price: 7.99,
              image: "",
            },
          ],
        },
        // Add more categories as needed
      ];

      // Simulate delay for fetching data
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set fetched data to state
      setFoodCategories(data);
    };

    fetchData();
  }, []);

  return (
    <div className="food-menu-page">
      <h1 className="page-title">Food Menu</h1>
      <div className="food-categories">
        {foodCategories.map((category) => (
          <div key={category.id} className="food-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="food-items">
              {category.foods.map((food) => (
                <div key={food.id} className="food-item">
                  <img
                    src="./logo192.png"
                    // src={require(`../images/${food.image}`).default}
                    alt={food.name}
                    className="food-image"
                  />
                  <div className="food-details">
                    <p className="food-name">{food.name}</p>
                    <p className="food-price">${food.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenuPage;
