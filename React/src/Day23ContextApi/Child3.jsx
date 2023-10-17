import { useContext } from "react";
import { UserContext } from "./context/userContext";

const Child3 = () => {
  let value = useContext(UserContext);
  return (
    <>
      <p>I am Child 3 and My city is {value.City}</p>
    </>
  );
};
export default Child3;
