const Child11 = (props) => {
  //   console.log(uName);

  return (
    <input
      onChange={(e) => props.onValChange(e.target.value)}
      type="text"
      placeholder="Enter your name"
      value={props.data}
    />
  );
};

export default Child11;
