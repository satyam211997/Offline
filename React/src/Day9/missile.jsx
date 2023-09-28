import { useState } from "react";

const Missile = () => {
  const [active, setActive] = useState({
    One: false,
    Two: false,
    Three: false,
    Four: false,
  });
  const onChange = (e) => {
    const { value } = e.target;
    setActive({ ...active, value: !active });

    console.log({ value });
  };
  return (
    <div>
      <button onClick={onChange}>
        {active.value === true ? "On" : "Open Terminal"}
      </button>
      {/* <p>{active.One === true ? "On" : "Open Terminal"}</p> */}

      <button onClick={onChange}>Enable Power</button>
      <button onClick={onChange}>Start Coundown</button>
      <button onClick={onChange}>Launch Missile</button>
    </div>
  );
};

export default Missile;
