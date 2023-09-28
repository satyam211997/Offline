import React from "react";
import { useContext } from "react";
import { loginContext } from "./loginContext";

const HomePage = () => {
  const { login } = useContext(loginContext);
  return (
    <>
      <p>{login.name}</p>
      <p>{login.email}</p>
      <img src={login.picture} alt="" />
    </>
  );
};

export default HomePage;
