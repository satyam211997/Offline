import { useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [EndTime, setEndTime] = useState(0);
  const [result, setResult] = useState(0);
  const onStart = () => {
    setInterval(() => setStartTime(Date.now()), 1000);
  };

  const onStop = () => {
    setEndTime(() => setEndTime(Date.now()));
    //     let result = (EndTime - startTime) / 1000;
    setResult((EndTime - startTime) / 1000);

    console.log(result);
  };
  return (
    <>
      <p>Result{result}</p>
      <p>StartTime:{startTime}</p>
      <p>EndTime:{EndTime}</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </>
  );
};
export default StopWatch;
