import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(10);
  const onHandleClick = (num) => {
    if (count < 100 && count > 0) {
      setCount(count + num);
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Count{count}</h2>
      <button onClick={() => onHandleClick(+2)}>Increment</button>
      <button onClick={() => onHandleClick(-2)}>Decrement</button>
    </>
  );
};

export default Counter2;
