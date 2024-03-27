import React from "react";
import { useAuth } from "../contexts/auth/auth_context";

const Dashboard = () => {
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h3>Meal Search</h3>
      <button onClick={handleClick}>LogOut</button>
    </div>
  );
};

export default Dashboard;
