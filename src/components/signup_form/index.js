import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const SignUp = ({ setNewUser }) => {
  const nav = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      await signUp(formData);
      nav("/dashboard");
    }
  };

  const handleClick = () => {
    setNewUser(false);
  };

  const { name, email, password, password2 } = formData;

  return (
    <div className="forms">
      <h2>SignUp</h2>
      <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name1">Name: </label>
        <input
          type="text"
          id="name1"
          name="name"
          value={name}
          placeholder="First and Last Name"
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="email1">Email: </label>
        <input
          type="email"
          id="email1"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="password1">Password: </label>
        <input
          type="password"
          id="password1"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => onChange(e)}
          minLength="6"
        />
        <input
          type="password"
          id="password2"
          name="password2"
          value={password2}
          placeholder="Confirm Password"
          onChange={(e) => onChange(e)}
          minLength="6"
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;
