import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import { ProtectedRoutes } from "./components/protectedRoutes/ProtectedRoutes";
import MyFavoriteRecipes from "./pages/MyFavoriteRecipes";
import ThisWeeksMeals from "./pages/ThisWeeksMeals";
import { useState } from "react";




function App() {
  const [myFavorites, setMyFavorites] = useState([]);
  return (
    <div
      className="App"
    >
      <Navbar />
      <h1>Food to Table</h1>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard myFavorites={myFavorites}setMyFavorites={setMyFavorites}/>} />
          <Route path="/my-favorite-recipes" element={<MyFavoriteRecipes myFavorites={myFavorites}/>} />
          <Route path="/this-weeks-meals" element={<ThisWeeksMeals />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

