import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>I am About Component</div>
      <Link to="/">Home</Link> <br />
      <Link to="/contact">Contact</Link>
    </>
  );
};

export default About;
