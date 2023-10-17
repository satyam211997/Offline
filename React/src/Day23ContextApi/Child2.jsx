import { useContext } from "react";
import { UserContext } from "./context/userContext";
import Child3 from "./Child3";

const Child2 = () => {
  let name = useContext(UserContext);
  return (
    <>
      <p>I am Child 2:{name.Uname}</p>
      <Child3 />
    </>
  );
};
export default Child2;
