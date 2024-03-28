import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyFavorites = () => {
  // State to hold the list of favorite recipes
  const [favorites, setFavorites] = useState([]);
  const nav = useNavigate();

  // useEffect to listen for changes in the checkbox state
  useEffect(() => {
    // Logic to update favorites based on checkbox state
    setFavorites(favoriteRecipes);
  }, [favoriteRecipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {favorites.map((recipe, index) => (
          <li key={index}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyFavorites;
