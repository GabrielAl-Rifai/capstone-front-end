import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import { ProtectedRoutes } from "./components/protectedRoutes/ProtectedRoutes";
import FavoriteRecipes from "./pages/FavoriteRecipes";
import ThisWeeksMeals from "./pages/ThisWeeksMeals";




function App() {
  return (
    <div
      className="App"
    >
      <Navbar />
      <h1>Food to Table</h1>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/favorite-recipes" element={<FavoriteRecipes />} />
          <Route path="/this-weeks-meals" element={<ThisWeeksMeals />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

