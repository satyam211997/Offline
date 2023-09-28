import { Component } from "react";

class MyInput extends Component {
  state = {
    myName: "",
    myCity: "",
  };
  render() {
    return (
      <>
        <div className="main">
          <input
            type="text"
            placeholder="Your Name"
            value={this.state.myName}
            onChange={(e) => {
              this.setState({ myName: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Enter email"
            value={this.state.myCity}
            onChange={(e) => {
              this.setState({ myCity: e.target.value });
            }}
          />
          {/* <input type="password" placeholder="Enter password" value={} /> */}
        </div>
        <div className="return">
          <p>myName:{this.state.myName}</p>
          <p>myCity:{this.state.myCity}</p>
        </div>
      </>
    );
  }
}
export default MyInput;
