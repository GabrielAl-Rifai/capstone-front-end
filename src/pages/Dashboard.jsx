import React from "react";
import RecipeSearchForm from "../components/recipe_search_form/RecipeSearchForm";

const Dashboard = () => {
  return (
    <div>
      <h3>Search then add recipes to your list of favorites</h3>
      <RecipeSearchForm />
    </div>
  );
};

export default Dashboard;

// import React, { useState } from "react";
// import { useAuth } from "../contexts/auth/auth_context";
// import RecipeSearchForm from "../components/recipe_search_form/RecipeSearchForm";

// const Dashboard = () => {
//   const { logout } = useAuth();

//   const handleClick = () => {
//     logout();
//   };

// const Dashboard = () => {
//   const [selectedRecipes, setSelectedRecipes] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const handleAddToFavorite = (recipe) => {
//     setFavorites([...favorites, recipe]);
//   };

//   return (
//     <div>
//       <h3>Search then add recipes to your list of favorites</h3>
//       <RecipeSearchForm />
//       {/* <h2>Search Results</h2> */}
//       {/* Display search results here */}
//       <ul>
//         {selectedRecipes.map((recipe) => (
//           <li key={recipe.id}>
//             {recipe.title}{" "}
//             <button onClick={() => handleAddToFavorite(recipe)}>
//               Add to Favorites
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;
