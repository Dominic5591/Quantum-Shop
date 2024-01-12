// Navbar.jsx
// import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Create Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
