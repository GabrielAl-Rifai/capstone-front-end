import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/auth">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/favorite-recipes">Favorite Recipes</Link>
      <Link to="/this-weeks-meals">This Week's Meals</Link>
    </nav>
  );
};
export default Navbar;
