import { useMemo, useState } from "react";

const CompUseMemo = () => {
  const [uName, setUname] = useState("");
  //   let Counter = 0;
  //   for (let i = 0; i < 100; i++) {
  //     Counter = Counter + i;
  //   }
  //   console.log(Counter);
  const Counter = useMemo(() => {
    let ounter = 0;
    for (let i = 0; i < 100; i++) {
      ounter = ounter + i;
    }
    console.log(ounter);
    return ounter;
  }, []);
  return (
    <>
      <div>{Counter}</div>
      <input
        type="text"
        value={uName}
        onChange={(e) => setUname(e.target.value)}
      />
    </>
  );
};

export default CompUseMemo;
