import React, { useState } from "react";
import LoginForm from "../components/login_form/LoginForm.jsx";
import SignUp from "../components/signup_form/SignupForm.jsx";

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      {newUser ? (
        <SignUp setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </>
  );
};

export default Auth;
