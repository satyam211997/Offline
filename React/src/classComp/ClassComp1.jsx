import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    const Increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    return (
      <div>
        <p>No-{this.state.count}</p>
        <button onClick={Increment}>Increment</button>
        
      </div>
    );
  }
}

export default Counter;
