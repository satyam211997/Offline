import { useState } from "react";

const Missile2 = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);

  function oneClick() {
    setOne(!one);

    if (one === true) {
      setTwo(false);
      setThree(false);
      setFour(false);
    }
    setB(!b);
    setC(false);
    setD(false);
  }

  function twoClick() {
    if (one === true) {
      setTwo(!two);
      setThree, setFour(false);
    }
    setC(!c);
    setD(false);
  }
  function threeClick() {
    if (two == true && one == true) {
      setThree(!three);
      setFour(false);
    }
    setD(!d);
  }
  function fourClick() {
    if (three == true && two == true && one == true) {
      setFour(!four);
    }
    setD(d);
  }

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div>
        <div>{one === false ? "off" : "on"}</div>

        <button
          disabled={a}
          onClick={oneClick}
          value={a}
          className="openTerminal"
        >
          Open Terminal
        </button>
      </div>
      <div>
        <div>{two === false ? "off" : "on"}</div>

        <button
          value={b}
          disabled={!b}
          onClick={twoClick}
          className="enable-power"
        >
          Enable Power
        </button>
      </div>
      <div>
        <div>{three === false ? "off" : "on"}</div>

        <button
          value={c}
          disabled={!c}
          onClick={threeClick}
          className="start-coundown"
        >
          Start Coundown
        </button>
      </div>
      <div>
        <div>{four === false ? "off" : "on"}</div>

        <button
          value={d}
          disabled={!d}
          onClick={fourClick}
          className="launch-missile"
        >
          Launch Missile
        </button>
        <div
          style={four === false ? { display: "none" } : { display: "block" }}
        >
          Missile Launched Successfull
        </div>
      </div>
    </div>
  );
};

export default Missile2;
