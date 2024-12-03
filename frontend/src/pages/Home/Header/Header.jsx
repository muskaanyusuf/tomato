import React, { useState } from "react";
import "./Header.css";

const Header = ({ onLoginSuccess }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // This function should include the actual login logic
    // Once login is successful, update the state
    setIsLoggedIn(true);
    onLoginSuccess(); // Notify Home that login was successful
  };

  return (
    <header>
      <h1>Welcome to the Food Delivery App</h1>
      {/* Display login button if the user is not logged in */}
      {!isLoggedIn ? (
        <button onClick={handleLogin} className="login-button">
          Log In
        </button>
      ) : (
        <span>Welcome, User!</span> // Or show some other user info
      )}
    </header>
  );
};

export default Header;
