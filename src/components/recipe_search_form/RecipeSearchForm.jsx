// components/RecipeSearchForm.jsx
import React, { useState } from "react";
import axios from "axios";

const RecipeSearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [diet, setDiet] = useState("none");
  const [exclude, setExclude] = useState("");
  const [response, setResponse] = useState(null);
