import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">My Library</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#authors">Authors</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-btn">
        <button onClick={() => window.location.href = '/component/Signin'}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
