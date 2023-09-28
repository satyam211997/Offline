import { useState } from "react";

const InputFormByFunction = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckBox] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          value={checkbox}
          onChange={(e) => {
            setCheckBox(e.target.checked);
          }}
        />{" "}
        <p>{checkbox ? "Yes" : "No"}, i accept term & condition</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>Gender</p>
        <input
          type="radio"
          name="gender"
          value={"Male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="Male">Male</label>
        <input
          type="radio"
          name="gender"
          value={"Female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="Female">Female</label>
      </div>
      <div>
        <p>Name:{name}</p>
        <p>Password:{password}</p>
        <p>Email:{email}</p>
        <p>Gender:{gender}</p>
      </div>
    </>
  );
};

export default InputFormByFunction;
