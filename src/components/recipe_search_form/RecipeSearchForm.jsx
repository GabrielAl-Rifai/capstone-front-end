import React, { useState } from "react";
import axios from "axios";

const RecipeSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [diet, setDiet] = useState("none");
  const [exclude, setExclude] = useState("");
  const [response, setResponse] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
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
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'X-RapidAPI-Key': 'cfe608883cmshc089ec670ef24afp11d781jsnbee990a342d9',
        },
      };
      const res = await axios.request(options);
      setResponse(res.data.results);

      history.push("/favorite-recipes", { searchResults: res.data.results });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Lasagna? Beef Stew?"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
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
        <input
          type="text"
          placeholder="Exclude Ingredients?"
          value={exclude}
          onChange={(e) => setExclude(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {response && (
        <div>
          <h4>Search Results:</h4>
          <ul>
            {response.map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeSearchForm;
