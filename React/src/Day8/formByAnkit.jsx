import React, { useState } from "react";

const FormByAnkit = () => {
  const [profile, setProfile] = useState({ name: "", email: "", pass: "" });
  return (
    <div>
      <input type="text" placeholder="Enter Name" />
      <p>Name-{profile.name}</p>
      <input type="email" placeholder="Enter email" />
      <p>Name-{profile.email}</p>
    </div>
  );
};

export default FormByAnkit;
