import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth';
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar';
import { ProtectedRoutes } from './components/protectedRoutes/index';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>Meal Schedule</h1>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route element={<ProtectedRoutes />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;

{/* <Route path='/meal_search' element={<Meal_Search />} />
<Route path='/meal_schedule' element={<Meal_Schedule /> */}