import { useState } from "react";
import Child11 from "./Child11";

const Parent11 = () => {
  const [uName, setUname] = useState("");

  const onListenBack = (data) => {
    setUname(data);
  };
  return (
    <>
      <Child11 onValChange={onListenBack} data={uName}/>
      <p>Hello {uName} </p>
    </>
  );
};
export default Parent11;
