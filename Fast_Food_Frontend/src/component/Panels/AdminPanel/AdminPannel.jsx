import React from 'react';
import './AdminPannel.css';

function AdminPannel() {
  const handleTerminateRestaurant = () => {
    // Add your API call logic here to terminate a restaurant
    alert('Terminate Restaurant API call goes here');
  };

  const handleTerminateUser = () => {
    // Add your API call logic here to terminate a user
    alert('Terminate User API call goes here');
  };

  return (
    <div className="admin-panel">
      <div className="sidebar">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#restaurants">Manage Restaurants</a></li>
          <li><a href="#users">Manage Users</a></li>
        </ul>
      </div>
      <div className="content">
        <h2>Admin Panel</h2>
        <div className="terminate-section">
          <h3>Terminate Restaurant</h3>
          <button onClick={handleTerminateRestaurant} className="terminate-button">
            Terminate Restaurant
          </button>
        </div>
        <div className="terminate-section">
          <h3>Terminate User</h3>
          <button onClick={handleTerminateUser} className="terminate-button">
            Terminate User
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPannel;
