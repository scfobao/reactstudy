import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>react 小书</h1>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
