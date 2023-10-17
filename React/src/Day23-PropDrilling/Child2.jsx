import Child3 from "./Child3";

const Child2 = (props) => {
  return (
    <>
      <p>
        I am Child2{props.name} and I am from:
        {props.city}
      </p>
      <Child3 city={props.city} />
    </>
  );
};
export default Child2;
