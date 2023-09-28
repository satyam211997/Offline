import { useState } from "react";
import Child from "./Child CompV1";
import ChildCompV2 from "./ChildCompV2";

const Toggle = () => {
  const [toggle, seToggle] = useState(false);
  return (
    <>
      <button onClick={() => seToggle((prev) => !prev)}>
        toggle Component
      </button>
      {toggle ? <Child /> : <ChildCompV2 />}
    </>
  );
};

export default Toggle;
