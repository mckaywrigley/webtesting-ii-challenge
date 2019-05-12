import React, { Component } from "react";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  handleClick = type => {
    switch (type) {
      case ball:
        return this.state.balls + 1;
        break;
      case strike:
        return this.state.strikes + 1;
        break;
      case foul:
        break;
      case hit:
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick(ball)}>Ball</button>
        <button onClick={this.handleClick(strike)}>Strike</button>
        <button onClick={this.handleClick(foul)}>Foul</button>
        <button onClick={this.handleClick(hit)}>hit</button>
      </div>
    );
  }
}

export default Dashboard;
