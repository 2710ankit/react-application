import React from "react";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-user">
        <span className="username">Username</span>
        <a href="#" className="login-logout">
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
