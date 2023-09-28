import { useState } from "react";

const ClickMe = () => {
  const [active, setActive] = useState(true);
  const change = () => {
    setActive(!active);
  };
  return (
    <>
      <h2>Click Button</h2>

      <button onClick={change}>
        {active === false ? "Clicked" : "ClickMe"}
      </button>
    </>
  );
};

export default ClickMe;
