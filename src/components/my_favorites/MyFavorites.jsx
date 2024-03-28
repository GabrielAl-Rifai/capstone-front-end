import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyFavorites = ({ myFavorites }) => {
  // State to hold the list of favorite recipes
  const [favorites, setFavorites] = useState([]);
  const nav = useNavigate();

  // useEffect to listen for changes in the checkbox state
  // useEffect(() => {
  //   // Logic to update favorites based on checkbox state
  //   setFavorites(favoriteRecipes);
  // }, [favoriteRecipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      <ul>
        {myFavorites.length ? (
          myFavorites.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))
        ) : (
          <h1> nothing to display' </h1> )}

      </ul>
    </div>
  );
};

export default MyFavorites;
// Read all recipes
// const getAllRecipes = async () => {
//   try {
//     const res = await axios.get('/api/recipe');
//     return res.data;
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//     throw error;
//   }
// };

// // Update a meal
// const updateRecipe = async (recipeId, updatedRecipeData) => {
//   try {
//     const res = await axios.put(`/api/recipe/${recipeId}`, updatedRecipeData);
//     return res.data;
//   } catch (error) {
//     console.error('Error updating recipe:', error);
//     throw error;
//   }
// };

// // Delete a meal
// const deleteRecipe = async (recipeId) => {
//   try {
//     const res = await axios.delete(`/api/recipess/${recipeId}`);
//     return res.data;
//   } catch (error) {
//     console.error('Error deleting recipe:', error);
//     throw error;
//   }
// };

// export { createRecipe, getAllRecipes, updateRecipe, deleteRecipe };
