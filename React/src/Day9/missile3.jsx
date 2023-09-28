import { useState } from "react";

const Missile3 = () => {
  const [active, setActive] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const onChange = (e) => {
    const { name } = e.target;
    setActive(name);
    console.log(active);
  };
  return (
    <div style={{ display: "flex", gap: 40 }}>
      <div>
        <div>{open === false ? "on" : "off"}</div>
        <button name="open" onClick={onChange}>
          Open-Terminal
        </button>
      </div>
      {/* <div>
        <div>{enable === false ? "on" : "off"}</div>
        <button name="enable" onClick={onChange}>
          Enable-Power
        </button>
      </div>
      <div>
        <div>{Start === false ? "on" : "off"}</div>
        <button name="Start" onClick={onChange}>
          Start-Coundown
        </button>
      </div>
      <div>
        <div>{launch === false ? "on" : "off"}</div>
        <button name="launch" onClick={onChange}>
          Launch-Missile
        </button>
      </div> */}
    </div>
  );
};

export default Missile3;
