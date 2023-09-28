import { useEffect } from "react";

const Child1V2 = () => {
  useEffect(() => {
    console.log("Mounting2");
    return () => {
      console.log("UnmountingV2");
    };
  });
  return <div>Child1V2</div>;
};

export default Child1V2;
