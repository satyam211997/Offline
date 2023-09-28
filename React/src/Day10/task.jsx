import { useState } from "react";
import ChildComp from "./childComp";

const ParentComp = () => {
  const [uName, setUname] = useState("");

  return (
    <>
      <ChildComp uName={uName} />
      <input
        onChange={(e) => setUname(e.target.value)}
        value={uName}
        type="text"
        placeholder="enter Your Name"
      />
    </>
  );
};
export default ParentComp;
