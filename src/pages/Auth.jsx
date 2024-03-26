import React, { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import SignUp from "../components/SignupForm.jsx";

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
