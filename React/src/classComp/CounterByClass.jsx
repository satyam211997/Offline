// import { Component } from "react";

import { Component } from "react";

// class CounterByClass extends Component {
//   state = {
//     count: 0,
//   };
//   render() {
//     //     const { count } = this.state;
//     const handleCount = () => {
//       this.setState({ count: this.state.count + 1 });
//     };
//     return (
//       <>
//         <div>{this.state.count}</div>
//         <button onClick={handleCount}>Increment</button>
//       </>
//     );
//   }
// }
// export default CounterByClass;

class CounterByClass extends Component {
  state = {
    count: 0,
  };

  render() {
    const handleCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const handleDecrease = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <>
        <h1>Class Component</h1>
        <p>{this.state.count}</p>
        <button onClick={handleCount}>Increase</button>
        <button onClick={handleDecrease}>Decriment</button>
      </>
    );
  }
}
export default CounterByClass;
