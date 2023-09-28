import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  useEffect(() => {
    console.log("count"), [count2];
  });

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((val) => val + 1)}>increment1</button>
      <p>{count2}</p>
      <button onClick={() => setCount2((val) => val - 1)}>Decrement2</button>
    </>
  );
};

export default UseEffect;
