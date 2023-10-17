import Child1 from "./Child1";
import { UserProvider } from "./context/userContext";

const Parent = () => {
  return (
    <UserProvider value={{ Uname: "Satyam", age: 26, City: "Jbp" }}>
      <Child1 />
    </UserProvider>
  );
};
export default Parent;
