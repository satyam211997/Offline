import { useDispatch, useSelector } from "react-redux";
import { add, divide, multiply, subtract } from "./Calculator.Slice";
import { useState } from "react";
const Calculator = () => {
  const calculatorState = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [firstNo, setFirstNo] = useState("");
  const [secondNo, setSecondNo] = useState("");

  const onAddNums = () => {
    dispatch(add({ firstNo, secondNo }));
  };
  const onSubtract = () => {
    dispatch(subtract({ firstNo, secondNo }));
  };
  const onMultiply = () => {
    dispatch(multiply({ firstNo, secondNo }));
  };
  const onDivide = () => {
    dispatch(divide({ firstNo, secondNo }));
  };

  return (
    <>
      <h1>
        I am Calculator <br /> Result:- {calculatorState}
      </h1>
      <input
        style={{ height: "30px", width: "40px" }}
        type="text"
        value={firstNo}
        onChange={(e) => setFirstNo(e.target.value)}
      />
      <input
        style={{ height: "30px", width: "40px" }}
        type="text"
        value={secondNo}
        onChange={(e) => setSecondNo(e.target.value)}
      />
      <p>Output:{calculatorState.value}</p>
      <button onClick={onAddNums}>Add</button>
      <button onClick={onSubtract}>subtract</button>
      <button onClick={onMultiply}>Multiply</button>
      <button onClick={onDivide}>Divide</button>
    </>
  );
};
export default Calculator;
