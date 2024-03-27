// components/RecipeSearchForm.jsx
import React, { useState } from "react";
import axios from "axios";

const RecipeSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [diet, setDiet] = useState("none");
  const [exclude, setExclude] = useState("");
  const [response, setResponse] = useState(null);
  
  const getRecipes = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("/api/search", {
        params: { keyword, diet, exclude },
      });
      setResponse(res.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };