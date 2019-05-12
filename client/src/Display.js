import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <p>Balls: {this.props.balls}</p>
        <p>Strikes: {this.props.strikes}</p>
      </div>
    );
  }
}

export default Display;
