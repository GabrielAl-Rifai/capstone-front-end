import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/auth_context";

const LoginForm = ({ setNewUser }) => {
  const nav = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    setNewUser(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    console.log("Success");
    nav("/dashboard");
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="forms">
      <h2>Login</h2>
      <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => onChange(e)}
          minLength="6"
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p>
    </div>
  );
};

export default LoginForm;
