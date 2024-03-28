import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/auth" className="nav-link">
        Login
      </Link>
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
      <Link to="/my-favorite-recipes" className="nav-link">
        My Favorite Recipes
      </Link>
      <Link to="/this-weeks-meals" className="nav-link">
        This Week's Meals
      </Link>
    </nav>
  );
};
export default Navbar;
