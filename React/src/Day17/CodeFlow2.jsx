import { useMemo, useState } from "react";

const OccuranceByMemo = () => {
  const [name, setName] = useState("");
  const newVal = useMemo(() => {});
  return (
    <>
      <input type="text" onChange={(e) => e.target.value} />
      <button>Change</button>
    </>
  );
};
export default OccuranceByMemo;
