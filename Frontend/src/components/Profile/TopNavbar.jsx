import React, { useState } from "react";
import "../../assets/profile/profile.scss";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
  };

  return (
    <nav className="top-navbar">
      <div className="navbar-content">
        <div className="profile-tab" onClick={handleProfileClick}>
          <span className="profile-name">User Name</span>
          {showLogout && (
            <div className="logout-popup">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;