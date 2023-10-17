import { useCallback, useState } from "react";
import Child from "./Child";

const CallBack = () => {
  const [count, setCount] = useState(0);

  console.log("Re-Render Parent");

  const onHandleChange = useCallback(() => setCount((pre) => pre + 1), []);

  return (
    <>
      <p onClick={() => setCount((val) => val + 1)}>{count}</p>

      <Child onClick={onHandleChange} />
    </>
  );
};
export default CallBack;
