import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin, isLoggedIn, setIsLoggedIn }) => {
  const [menu, setMenu] = useState("menu");
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update the login state
    alert("You have been logged out!");
    navigate('/'); // Redirect to the home page
  };

  // Show login popup
  const handleSignIn = () => {
    setShowLogin(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Navigation menu links */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
        </div>

        {/* Conditional button */}
        <button onClick={isLoggedIn ? handleLogout : handleSignIn}>
          {isLoggedIn ? "Logout" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
