import { useState } from "react";
import ChildDay15B from "./2.Child";

const ParentDay15B = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  const isEven = counter % 2 === 0 ? "Even" : "Odd";

  for (let i = 0; i < 20; i++) {
    console.log({ i });
  }

  const onChange = () => {}; // 1003 -> 12345

  console.log("Re-Render ParentDay15B");
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p onClick={() => setCounter((val) => val + 1)}>Counter: {counter}</p>
      <ChildDay15B />
      <ChildDay15B count={counter} />
      <ChildDay15B />
      <ChildDay15B />
      <ChildDay15B />
    </div>
  );
};

export default ParentDay15B;
