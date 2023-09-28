import { useState } from "react";
import Child1V1 from "./Child1V1";
import Child1V2 from "./Child1V2";

const Toggle1 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>Toggle</h1>
      {toggle ? <Child1V2 /> : <Child1V1 />}
      <button onClick={() => setToggle((prev) => !prev)}>Change</button>
    </>
  );
};

export default Toggle1;
