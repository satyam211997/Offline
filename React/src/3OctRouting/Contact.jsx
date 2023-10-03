import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div>I am Contact Component</div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </>
  );
};

export default Contact;
