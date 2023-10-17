import Child2 from "./Child2";

const Child1 = (props) => {
  return (
    <>
      <p>hello I amm Child 1{props.name}</p>
      <Child2 name={props.name} city={props.city} />
    </>
  );
};
export default Child1;
