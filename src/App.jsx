import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/NavBar";
import { ProtectedRoutes } from "./components/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>My Meal Schedule</h1>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Route path='/meal_search' element={<Meal_Search />} />
<Route path='/meal_schedule' element={<Meal_Schedule /> */
}
