import { useState } from "react";

const CounterQuestion = () => {
  const [count, setCount] = useState(10);
  const onIncrement = () => {
    if (count < 100) {
      setCount(count + 2);
    }
  };
  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 2);
    }
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <p>hello</p>
    </>
  );
};

export default CounterQuestion;
