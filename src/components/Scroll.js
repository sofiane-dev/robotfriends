import { Component } from "react";

class Scroll extends Component {
  render() {
    return <div className="scrollable">{this.props.children}</div>;
  }
}
export default Scroll;
