import React from "react";
import { useLocation } from "react-router-dom";
import MyFavorites from "../components/my_favorites/MyFavorites"; // Import MyFavorites component
// import { useNavigate } from "react-router-dom";



const FavoriteRecipes = () => {
  const location = useLocation();
  // const nav = useNavigate();
  const searchResults = location.state?.searchResults;

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <MyFavorites favoriteRecipes={searchResults} />
    </div>
  );
};

export default FavoriteRecipes;
