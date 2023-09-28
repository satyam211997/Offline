import { createContext, useContext, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import { loginContext } from "./loginContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(loginContext);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setLogin({
        name: data.user.displayName,
        email: data.user.email,
        picture: data.user.photoURL,
      });
      navigate("/Homepage");
    });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={handleClick}>SignIn with Google</button>
    </div>
  );
};

export default SignIn;
