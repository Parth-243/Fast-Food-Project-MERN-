// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminPanel";

// const AdminPanel = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchRestaurants();
//     fetchUsers();
//   }, []);

//   const fetchRestaurants = async () => {
//     try {
//       const response = await axios.get("/api/restaurants");
//       setRestaurants(response.data);
//     } catch (error) {
//       console.error("Error fetching restaurants:", error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("/api/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const removeRestaurant = async (id) => {
//     try {
//       await axios.delete(`/api/restaurants/${id}`);
//       fetchRestaurants();
//     } catch (error) {
//       console.error("Error removing restaurant:", error);
//     }
//   };

//   const removeUser = async (id) => {
//     try {
//       await axios.delete(`/api/users/${id}`);
//       fetchUsers();
//     } catch (error) {
//       console.error("Error removing user:", error);
//     }
//   };

//   return (
//     <div className="admin-panel">
//       <div className="section">
//         <h2>Registered Restaurants</h2>
//         <ul>
//           {restaurants.map((restaurant) => (
//             <li key={restaurant.id}>
//               {restaurant.name}
//               <button onClick={() => removeRestaurant(restaurant.id)}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="section">
//         <h2>Registered Users</h2>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               {user.username}
//               <button onClick={() => removeUser(user.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="section">
//         <h2>Main Food Categories</h2>
//         {/* Add functionality to add/remove categories */}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
import React from "react";
import "./AdminPanel.css";

const AdminPanel = () => {
  // Dummy data for restaurants and users
  const restaurants = [
    { id: 1, name: "Restaurant A" },
    { id: 2, name: "Restaurant B" },
    { id: 3, name: "Restaurant C" },
  ];

  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ];

  const handleRemoveRestaurant = (id) => {
    // Handle removing restaurant logic here
    console.log(`Removing restaurant with id ${id}`);
  };

  const handleRemoveUser = (id) => {
    // Handle removing user logic here
    console.log(`Removing user with id ${id}`);
  };

  const handleAddCategory = () => {
    // Handle adding category logic here
    console.log("Adding new category");
  };

  return (
    <div className="admin-panel">
      <div className="section">
        <h2>Registered Restaurants</h2>
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveRestaurant(restaurant.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Registered Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveUser(user.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Main Food Categories</h2>
        <div className="form-container">
          <h2>Add New Category</h2>
          <div className="form-group">
            <label htmlFor="category">Category Name:</label>
            <input type="text" id="category" />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary add-btn"
              onClick={handleAddCategory}
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
