import React, { memo } from "react";

const Child = (props) => {
  console.log("Re-render child");
  return (
    <>
      <div>Child</div>
      <button onClick={props.onClick}>Increase</button>
    </>
  );
};
const ChildComp = memo(Child);
export default ChildComp;
