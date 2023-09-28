import { useState } from "react";
import C1 from "./C1";

const P1 = () => {
  const [Uname, setUName] = useState("");

  const myFunction = (data) => {
    setUName(data);
  };
  return (
    <>
      <p>Hello {Uname}</p>
      <C1 myProp={myFunction} data={Uname} />
    </>
  );
};

export default P1;
