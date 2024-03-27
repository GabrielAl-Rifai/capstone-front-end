import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation

const FavoriteRecipes = () => {
  const location = useLocation(); // Initialize useLocation
  const searchResults = location.state?.searchResults; // Get search results from location state

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {searchResults && (
        <ul>
          {searchResults.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteRecipes;