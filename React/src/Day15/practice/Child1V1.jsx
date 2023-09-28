import { useEffect } from "react";

const Child1V1 = () => {
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmounting1");
    };
  });
  return <div>Child1V1</div>;
};

export default Child1V1;
