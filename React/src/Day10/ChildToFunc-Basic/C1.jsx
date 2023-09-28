import React from "react";

const C1 = (props) => {
  return (
    <input
      onChange={(e) => props.myProp(e.target.value)}
      type="text"
      placeholder="Enter Your Name"
      value={props.value}
    />
  );
};

export default C1;
