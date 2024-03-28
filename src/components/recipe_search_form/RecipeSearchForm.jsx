import React, { useState } from "react";
import axios from "axios";

const RecipeSearchForm = () => {
  // State variables to store input values and search results
  const [keyword, setKeyword] = useState("");
  const [diet, setDiet] = useState("none");
  const [exclude, setExclude] = useState("");
  const [response, setResponse] = useState(null);
  const [myFavorites, setMyFavorites] = useState([]);

  // Function to handle form submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Configuration for making the API request
      const options = {
        method: "GET",
        url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
        params: {
          query: keyword,
          diet,
          excludeIngredients: exclude,
          number: "20",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "cfe608883cmshc089ec670ef24afp11d781jsnbee990a342d9",
        },
      };
      // Send the API request and set the response data to state
      const res = await axios.request(options);
      setResponse(res.data.results);
    } catch (error) {
      // Log any errors that occur during the API request
      console.error("Error fetching recipes:", error);
    }
  };

  const handleCheckboxChange = (recipeId) => {
    // Check if recipeId is already in My Favorites
    const index = myFavorites.indexOf(recipeId);
    if (index === -1) {
      // If not, add it to My Favorites
      setMyFavorites([...myFavorites, recipeId]);
    } else {
      // If already in My Favorites, remove it
      const updatedFavorites = myFavorites.filter((id) => id !== recipeId);
      setMyFavorites(updatedFavorites);
    }
  };

  return (
    <div>
      {/* Form for inputting search parameters */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Lasagna? Beef Stew?"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {/* Dropdown for selecting dietary preferences */}
        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
          {[
            "no strict diet",
            "pescetarian",
            "lacto vegetarian",
            "ovo vegetarian",
            "vegan",
            "vegetarian",
          ].map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>
        {/* Input field for excluding ingredients */}
        <input
          type="text"
          placeholder="Exclude Ingredients?"
          value={exclude}
          onChange={(e) => setExclude(e.target.value)}
        />
        {/* Button to submit the search */}
        <button type="submit">Search</button>
      </form>
      {/* Display search results */}
      {response && (
        <div>
          <h4>Search Results:</h4>
          <ul>
            {response.map((recipe) => (
              <li key={recipe.id}>
                <input
                  type="checkbox"
                  checked={myFavorites.includes(recipe.id)}
                  onChange={() => handleCheckboxChange(recipe.id)}
                />
                {recipe.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeSearchForm;
