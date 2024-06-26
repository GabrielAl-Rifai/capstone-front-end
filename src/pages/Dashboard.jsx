import React from "react";
import RecipeSearchForm from "../components/recipe_search_form/RecipeSearchForm";


const Dashboard = ({myFavorites, setMyFavorites}) => {
  return (
    <div>
      <h3>Search then add recipes to your list of favorites</h3>
      <RecipeSearchForm myFavorites={myFavorites} setMyFavorites={setMyFavorites}/>
    </div>
  );
};

export default Dashboard;


