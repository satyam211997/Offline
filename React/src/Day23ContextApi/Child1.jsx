import Child2 from "./Child2";
import { useContext } from "react";
import { UserConsumer } from "./context/userContext";

const Child1 = () => {
  const value = useContext(UserConsumer);
  return (
    <>
      <p>Hello I am Chiild1 Comp{value.Uname}</p>
      <Child2 />
    </>
  );
};
export default Child1;
