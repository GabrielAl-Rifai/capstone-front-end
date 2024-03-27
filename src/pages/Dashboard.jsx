import React from "react";
import { useAuth } from "../contexts/auth/auth_context";
import RecipeSearchForm from "../components/recipe_search_form/RecipeSearchForm";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h3>Search then add recipes to your list of favorites</h3>
      <RecipeSearchForm />

      {/* <button onClick={handleClick}>LogOut</button> */}
    </div>
  );
};

export default Dashboard;
